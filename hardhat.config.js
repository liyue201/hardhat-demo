/** @type import('hardhat/config').HardhatUserConfig */

require("@nomicfoundation/hardhat-toolbox");



// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const GOERLI_PRIVATE_KEY = "fb8a0cfc48de5dde61c35a4039cb8dd31d2c8b874bc6f70364ed331fb3a33200";

module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: `https://1rpc.io/sepolia`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};