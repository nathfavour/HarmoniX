const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HarmoniX", function () {
  let rewardToken, musicNFT, gameMechanics, royaltyDistribution;
  let owner, artist, user1, user2;

  before(async function () {
    [owner, artist, user1, user2] = await ethers.getSigners();
  
    // Deploy RewardToken
    const RewardToken = await ethers.getContractFactory("RewardToken");
    rewardToken = await RewardToken.deploy();
    await rewardToken.waitForDeployment();
  
    // Deploy MusicNFT
    const MusicNFT = await ethers.getContractFactory("MusicNFT");
    musicNFT = await MusicNFT.deploy();
    await musicNFT.waitForDeployment();
  
    // Deploy GameMechanics
    const GameMechanics = await ethers.getContractFactory("GameMechanics");
    gameMechanics = await GameMechanics.deploy(rewardToken.target, musicNFT.target);
    await gameMechanics.waitForDeployment();
  
    // Deploy RoyaltyDistribution
    const RoyaltyDistribution = await ethers.getContractFactory("RoyaltyDistribution");
    royaltyDistribution = await RoyaltyDistribution.deploy(musicNFT.target);
    await royaltyDistribution.waitForDeployment();
  
    // Mint initial RewardTokens to GameMechanics contract
    await rewardToken.connect(owner).mint(gameMechanics.target, ethers.parseEther("1000"));
  });

  describe("MusicNFT Contract", function () {
    it("Should approve an artist and mint an NFT", async function () {
      await musicNFT.connect(owner).approveArtist(artist.address);

      const isApproved = await musicNFT.isApprovedArtist(artist.address);
      expect(isApproved).to.be.true;

      const tx = await musicNFT.connect(artist).mint("ipfs://metadata1", 5);
      await tx.wait();

      const ownerOfNFT = await musicNFT.ownerOf(0);
      expect(ownerOfNFT).to.equal(artist.address);
    });

    it("Should reject unauthorized minting attempts", async function () {
      await expect(
        musicNFT.connect(user1).mint("ipfs://metadata2", 5)
      ).to.be.revertedWith("Not an approved artist");
    });

    it("Should enforce royalty limits during minting", async function () {
      await expect(
        musicNFT.connect(artist).mint("ipfs://metadata3", 15)
      ).to.be.revertedWith("Royalty cannot exceed 10%");
    });
  });

  describe("GameMechanics Contract", function () {
    it("Should allow voting on a token and reward the voter", async function () {
      const balanceBefore = await rewardToken.balanceOf(user1.address);
  
      await gameMechanics.connect(user1).vote(0);
  
      const votes = await gameMechanics.votes(0);
      expect(votes).to.equal(1);
  
      const balanceAfter = await rewardToken.balanceOf(user1.address);
      expect(balanceAfter - balanceBefore).to.equal(ethers.parseEther("10")); // Remove 'n'
    });

    it("Should enforce the cooldown period for voting", async function () {
      await expect(gameMechanics.connect(user1).vote(0)).to.be.revertedWith("Cooldown period active");
    });

    it("Should allow the owner to update the cooldown period", async function () {
      await gameMechanics.connect(owner).updateCooldownPeriod(60 * 60 * 2); // 2 hours

      const cooldown = await gameMechanics.cooldownPeriod();
      expect(cooldown).to.equal(60 * 60 * 2);
    });
  });

  describe("RoyaltyDistribution Contract", function () {
    it("Should distribute royalties to the NFT owner", async function () {
         // Ensure a second NFT is minted with no royalties
    await musicNFT.connect(artist).mint("ipfs://metadata2", 0);
      const artistBalanceBefore = await ethers.provider.getBalance(artist.address);
  
      const tx = await royaltyDistribution.connect(user1).distributeRoyalties(0, {
        value: ethers.parseEther("1"),
      });
      await tx.wait();
  
      const artistBalanceAfter = await ethers.provider.getBalance(artist.address);
      const expectedRoyalty = ethers.parseEther("0.05"); // 5% royalty
  
      expect(artistBalanceAfter - artistBalanceBefore).to.equal(expectedRoyalty);
    });

    it("Should reject royalty distribution for tokens without royalties", async function () {
        await expect(
          royaltyDistribution.connect(user1).distributeRoyalties(1, {
            value: ethers.parseEther("1"),
          })
        ).to.be.revertedWith("No royalties set for this token");
      });
    });

    describe("RewardToken Contract", function () {
        it("Should allow the owner to mint new tokens", async function () {
          const supplyBefore = await rewardToken.totalSupply();
      
          await rewardToken.connect(owner).mint(user2.address, ethers.parseEther("500"));
      
          const supplyAfter = await rewardToken.totalSupply();
          expect(supplyAfter - supplyBefore).to.equal(ethers.parseEther("500")); // Remove 'n'
        });


    it("Should reject minting attempts by non-owners", async function () {
      await expect(
        rewardToken.connect(user1).mint(user1.address, ethers.parseEther("100"))
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });
  });

  describe("Integration Tests", function () {
    it("Should reward a voter, update votes, and reflect on the leaderboard", async function () {
      await gameMechanics.connect(user2).vote(0);

      const leaderboard = await gameMechanics.getLeaderboard();
      expect(leaderboard[0][0]).to.equal(0); // Token ID
      expect(leaderboard[1][0]).to.equal(2); // Votes for token 0
    });
  });
});
