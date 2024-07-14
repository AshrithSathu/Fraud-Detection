const express = require("express");
const aiController = require("../controllers/aiController");
const blockchainController = require("../controllers/blockchainController");

const router = express.Router();

router.post("/generate-synthetic-data", aiController.generateSyntheticData);
router.post("/log-transaction", blockchainController.logTransaction);

module.exports = router;
