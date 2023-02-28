module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 9545,
      network_id: "*" // Match any network id
    },
    advanced: {
      port: 9545,             // Custom port
      network_id: 1337,       // Custom network
      gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
      gasPrice: 20000000000 // 20 gwei (in wei) (default: 100 gwei)
      // from: <address>,        // Account to send transactions from (default: accounts[0])
      // websocket: true         // Enable EventEmitter interface for web3 (default: false)
    }
  },
  compilers: {
    solc: {
      version: "0.4.17",      // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }

};
