var Mnemonic = require('bitcore-mnemonic');
var HDWalletProvider = require("truffle-hdwallet-provider");

var code = new Mnemonic();
console.log();
try{
  if (require('fs').existsSync("./seed")){
    throw("File ./seed exists. Not overwriting.")
  }else{
    require('fs').writeFileSync("./seed", code.toString() , "utf8");
    console.log("SEED: "+code.toString())
    var hd=new HDWalletProvider(code.toString());
    console.log("ADDRESS: "+hd.getAddress())
  }
} catch(err){
  console.error(err)
}
