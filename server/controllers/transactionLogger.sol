// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ComplexTransactionLogger {
    event TransactionLogged(address indexed sender, uint256 amount, string data, uint256 timestamp);

    struct Transaction {
        address sender;
        uint256 amount;
        string data;
        uint256 timestamp;
    }

    mapping(uint256 => Transaction) private transactions;
    uint256 private transactionCounter;

    mapping(address => uint256) private transactionCount;

    address private owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function logTransaction(uint256 amount, string memory data) public {
        // Increment the transaction counter
        transactionCounter++;

        // Store the transaction details
        transactions[transactionCounter] = Transaction({
            sender: msg.sender,
            amount: amount,
            data: data,
            timestamp: block.timestamp
        });

        transactionCount[msg.sender]++;

        emit TransactionLogged(msg.sender, amount, data, block.timestamp);
    }

    function getTransaction(uint256 transactionId) public view returns (address, uint256, string memory, uint256) {
        Transaction memory txn = transactions[transactionId];
        return (txn.sender, txn.amount, txn.data, txn.timestamp);
    }

    function getTransactionCount(address addr) public view returns (uint256) {
        return transactionCount[addr];
    }

    function changeOwner(address newOwner) public onlyOwner {
        owner = newOwner;
    }
}

//The TransactionLogger smart contract provides a comprehensive mechanism for logging and 
//storing transaction details on the blockchain. It includes features for logging transactions, 
//retrieving transaction details, and managing access control through ownership. 
//The contract ensures that only the owner can change ownership, 
//providing a layer of security and control over the contract's functionality.
