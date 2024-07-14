const axios = require("axios");
const {
  applyDifferentialPrivacyToSum,
} = require("../utils/differentialPrivacy");

exports.applyDifferentialPrivacy = async (req, res) => {
  try {
    const { data, sensitivity, epsilon } = req.body;
    const privateSum = applyDifferentialPrivacyToSum(
      data,
      sensitivity,
      epsilon
    );
    res.json({ privateSum });
  } catch (error) {
    console.error("Error applying differential privacy:", error);
    res.status(500).send(error.message);
  }
};

exports.generateSyntheticData = async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci-codex/completions",
      {
        prompt: "Generate synthetic transaction data",
        max_tokens: 100,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
