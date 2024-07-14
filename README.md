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
1. **Backend**:
   - Navigate to the `server` directory.
   - Install dependencies: `npm install`
   - Start the server: `node server.js`

2. **Frontend**:
   - Navigate to the `client` directory.
   - Install dependencies: `npm install`
   - Start the frontend: `npm start`

