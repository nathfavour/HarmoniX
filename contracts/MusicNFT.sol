// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MusicNFT is ERC721URIStorage, Ownable {
    uint256 public nextTokenId;
    mapping(address => bool) public isApprovedArtist;
    mapping(uint256 => uint256) public royaltyPercentage; // tokenId => royalty %

    event ArtistApproved(address indexed artist);
    event Minted(uint256 indexed tokenId, address indexed artist, string metadataURI);

    constructor() ERC721("MusicNFT", "MNFT") {}

    modifier onlyApprovedArtist() {
        require(isApprovedArtist[msg.sender], "Not an approved artist");
        _;
    }

    function approveArtist(address artist) external onlyOwner {
        isApprovedArtist[artist] = true;
        emit ArtistApproved(artist);
    }

    function mint(string calldata metadataURI, uint256 royalty) external onlyApprovedArtist {
        require(royalty <= 10, "Royalty cannot exceed 10%");
        uint256 tokenId = nextTokenId++;
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, metadataURI);
        royaltyPercentage[tokenId] = royalty;
        emit Minted(tokenId, msg.sender, metadataURI);
    }
}
