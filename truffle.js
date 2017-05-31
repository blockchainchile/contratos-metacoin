//HD Wallet for keyless servers (infura)
var HDWalletProvider = require("truffle-hdwallet-provider");
function getNmemonic(){
  try{
    return require('fs').readFileSync("./seed", "utf8");
  } catch(err){
    return "";
  }
}

var TestRPC = require("ethereumjs-testrpc");


module.exports = {
  networks: {
     in_memory: {
      provider: TestRPC.provider(),
      network_id: "*",
    },
    local: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: new HDWalletProvider(getNmemonic(), "https://rinkeby.infura.io/"),
      network_id: 4
    }
  }
};
