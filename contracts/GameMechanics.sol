// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IMusicNFT {
    function ownerOf(uint256 tokenId) external view returns (address);
    function royaltyPercentage(uint256 tokenId) external view returns (uint256);
    function nextTokenId() external view returns (uint256);
}


contract GameMechanics is Ownable {
    IERC20 public rewardToken;
    IMusicNFT public musicNFT;

    mapping(uint256 => uint256) public votes; // tokenId => vote count
    mapping(uint256 => address[]) public voters; // tokenId => array of voter addresses
    mapping(address => uint256) public lastVoteTimestamp;
    uint256 public cooldownPeriod = 1 hours;

    event Voted(uint256 indexed tokenId, address indexed voter);
    event LeaderboardUpdated(uint256 indexed tokenId, uint256 votes);

    constructor(address _rewardToken, address _musicNFT) {
        rewardToken = IERC20(_rewardToken);
        musicNFT = IMusicNFT(_musicNFT);
    }

    modifier cooldown() {
        require(
            block.timestamp > lastVoteTimestamp[msg.sender] + cooldownPeriod,
            "Cooldown period active"
        );
        _;
    }

    function vote(uint256 tokenId) external cooldown {
        votes[tokenId]++;
        voters[tokenId].push(msg.sender);
        lastVoteTimestamp[msg.sender] = block.timestamp;

        // Reward the voter
        rewardToken.transfer(msg.sender, 10 * 10**18); // 10 tokens per vote

        emit Voted(tokenId, msg.sender);
        emit LeaderboardUpdated(tokenId, votes[tokenId]);
    }

    function getLeaderboard() external view returns (uint256[] memory, uint256[] memory) {
        uint256[] memory tokenIds = new uint256[](musicNFT.nextTokenId());
        uint256[] memory voteCounts = new uint256[](musicNFT.nextTokenId());

        for (uint256 i = 0; i < musicNFT.nextTokenId(); i++) {
            tokenIds[i] = i;
            voteCounts[i] = votes[i];
        }
        return (tokenIds, voteCounts);
    }

    function updateCooldownPeriod(uint256 newCooldown) external onlyOwner {
        cooldownPeriod = newCooldown;
    }
}
