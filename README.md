# Fraud Detection Application

## Description

This project is a web application designed to detect fraudulent transactions using generative AI and securely log these transactions on a blockchain. It consists of a frontend built with React.js and a backend built with Node.js and Express.js. The backend integrates AI models for fraud detection and uses blockchain technology for secure transaction logging.

## Key Features

- **Dashboard**: Displays overall statistics and insights about transactions.
- **Transaction List**: Shows a list of transactions with details.
- **Fraud Detection Interface**: Displays results and insights from the fraud detection model.
- **AI Integration**: Uses APIs from OpenAI to generate synthetic transaction data and detect fraudulent transactions.
- **Blockchain Integration**: Logs transactions on the Ethereum blockchain using Web3.js.
- **Data Handling**: Normalizes transaction data and uses AI models for anomaly detection.
- **Security**: Implements differential privacy techniques to protect user data.

## Technologies Used

- Frontend: React.js
- Backend: Node.js, Express.js
- AI: TensorFlow, OpenAI API
- Blockchain: Web3.js, Ethereum
- Database: MongoDB

## Setup Instructions

### Prerequisites

1. **Install MongoDB Locally**:

   - Follow the instructions on the [MongoDB installation page](https://docs.mongodb.com/manual/installation/) to install MongoDB on your local machine.
   - Start the MongoDB server by running `mongod` in your terminal.

2. **Setup .env Files**:

   - Create a `.env` file in the `server` directory with the following content:

     ```plaintext
     INFURA_PROJECT_ID=your_infura_project_id
     CONTRACT_ADDRESS=your_contract_address
     ACCOUNT_ADDRESS=your_account_address
     PRIVATE_KEY=your_private_key
     OPENAI_API_KEY=your_openai_api_key
     ETHEREUM_NETWORK=mainnet # or ETHEREUM_NETWORK=sepolia
     ```

   - Create a `.env` file in the `client` directory with the following content:
     ```plaintext
     REACT_APP_SERVER_URL=http://localhost:5000
     ```

## Setup Instructions

1. **Backend**:

- Navigate to the `server` directory.
- Install dependencies: `npm install`
- Start the server: `node server.js`

2. **Frontend**:

- Navigate to the `client` directory.
- Install dependencies: `npm install`
- Start the frontend: `npm start`

```

```
