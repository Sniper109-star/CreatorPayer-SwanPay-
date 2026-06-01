// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC20 {
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function transfer(address to, uint256 amount) external returns (bool);
}

contract CreatorPayEscrow {
    address public immutable owner;
    address public immutable arbiter;
    address public immutable payer;
    address public immutable payee;

    uint256 public amount;
    IERC20 public immutable token;
    bool public funded;
    bool public released;
    bool public refunded;

    event Funded(address indexed payer, uint256 amount);
    event Released(address indexed payee, uint256 amount);
    event Refunded(address indexed payer, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    constructor(
        address _owner,
        address _arbiter,
        address _payer,
        address _payee,
        address _token,
        uint256 _amount
    ) {
        owner = _owner;
        arbiter = _arbiter;
        payer = _payer;
        payee = _payee;
        token = IERC20(_token);
        amount = _amount;
    }

    function fund() external onlyOwner {
        require(!funded, "Already funded");
        require(msg.sender == payer, "Only payer can fund");
        funded = true;
        emit Funded(payer, amount);
    }

    function release() external onlyOwner {
        require(funded, "Not funded");
        require(!released, "Already released");
        released = true;
        token.transfer(payee, amount);
        emit Released(payee, amount);
    }

    function refund() external onlyOwner {
        require(funded, "Not funded");
        require(!refunded, "Already refunded");
        refunded = true;
        token.transfer(payer, amount);
        emit Refunded(payer, amount);
    }

    function getState() external view returns (string memory) {
        if (!funded) return "pending";
        if (released) return "released";
        if (refunded) return "refunded";
        return "funded";
    }
}
