// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/access/Ownable.sol";

interface IMusicNFT {
    function royaltyPercentage(uint256 tokenId) external view returns (uint256);
    function ownerOf(uint256 tokenId) external view returns (address);
}

contract RoyaltyDistribution is Ownable {
    IMusicNFT public musicNFT;

    event RoyaltiesDistributed(uint256 indexed tokenId, uint256 amount, address indexed recipient);

    constructor(address _musicNFT) {
        musicNFT = IMusicNFT(_musicNFT);
    }

    function distributeRoyalties(uint256 tokenId) external payable {
        uint256 royalty = musicNFT.royaltyPercentage(tokenId);
        address artist = musicNFT.ownerOf(tokenId);
        require(royalty > 0, "No royalties set for this token");
        require(artist != address(0), "Invalid artist address");

        uint256 amount = (msg.value * royalty) / 100;
        (bool success, ) = artist.call{value: amount}("");
        require(success, "Royalty transfer failed");

        emit RoyaltiesDistributed(tokenId, amount, artist);
    }
}
