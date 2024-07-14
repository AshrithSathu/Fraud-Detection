const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  amount: Number,
  date: Date,
  isFraud: Boolean,
});

module.exports = mongoose.model("Transaction", transactionSchema);
