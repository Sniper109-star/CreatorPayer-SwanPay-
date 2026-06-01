import HardhatNetworkHelpers from "@nomicfoundation/hardhat-network-helpers";

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IPayPal {
  function charge(string calldata orderId, uint256 amount) external returns (bool);
}

contract PayPalPayment {
  address public owner;
  IPayPal public immutable paypal;

  event PaymentReceived(address indexed from, uint256 amount, string orderId);

  constructor(address _paypal) {
    owner = msg.sender;
    paypal = IPayPal(_paypal);
  }

  function pay(string calldata orderId, uint256 amount) external payable returns (bool) {
    require(msg.value >= amount, "Insufficient funds");
    emit PaymentReceived(msg.sender, amount, orderId);
    return true;
  }

  function withdraw() external {
    require(msg.sender == owner, "Not owner");
    payable(owner).transfer(address(this).balance);
  }
}
