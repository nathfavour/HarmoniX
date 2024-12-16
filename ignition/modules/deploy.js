const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with account:", deployer.address);

    // Deploy RewardToken
    const RewardToken = await ethers.getContractFactory("RewardToken");
    const rewardToken = await RewardToken.deploy();
    console.log("RewardToken deployed to:", rewardToken.target);

    // Deploy MusicNFT
    const MusicNFT = await ethers.getContractFactory("MusicNFT");
    const musicNFT = await MusicNFT.deploy();
    console.log("MusicNFT deployed to:", musicNFT.target);

    // Deploy RoyaltyDistribution
    const RoyaltyDistribution = await ethers.getContractFactory("RoyaltyDistribution");
    const royaltyDistribution = await RoyaltyDistribution.deploy(musicNFT.address);
    console.log("RoyaltyDistribution deployed to:", royaltyDistribution.target);

    // Deploy GameMechanics
    const GameMechanics = await ethers.getContractFactory("GameMechanics");
    const gameMechanics = await GameMechanics.deploy(rewardToken.address, musicNFT.address);
    console.log("GameMechanics deployed to:", gameMechanics.target);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
