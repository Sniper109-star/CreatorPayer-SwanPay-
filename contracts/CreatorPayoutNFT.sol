// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract CreatorPayoutNFT {
    string public name = "CreatorPay Payout Badge";
    string public symbol = "CPB";
    uint256 private _tokenIdCounter;

    event BadgeMinted(uint256 indexed tokenId, address indexed creator, uint256 amount, bytes32 txHash);

    function mint(address creator, uint256 amount, bytes32 txHash) external returns (uint256) {
        _tokenIdCounter += 1;
        uint256 newTokenId = _tokenIdCounter;
        emit BadgeMinted(newTokenId, creator, amount, txHash);
        return newTokenId;
    }
}
