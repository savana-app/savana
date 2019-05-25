var express = require('express');
var app = express.Router();
//var app            =        express();
path = require('path');
var bodyParser =        require("body-parser");
const util = require('ethereumjs-util');
const Eth = require('ethjs');
const eth = new Eth(new Eth.HttpProvider('https://mainnet.infura.io/v3/5fb8eb0a6c5646fb891f99d133c14510'));

 //Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/getSign',function(req,res){
  var signature=req.body.signature;
  var message=req.body.message;
  if(signature && message) {
    console.log("User signature = "+signature+", message is "+message);

    const {v, r, s} = util.fromRpcSig(signature);



    console.log("users message here:" ,message);
    console.log("i generate this msh from strech");
    var newmsg  = util.toBuffer(message);

    console.log("newmsg2", newmsg);

    console.log(v);
    console.log(r);
    console.log(s);
    const pubKey  = util.ecrecover(newmsg, v, r, s);
    const addrBuf = util.pubToAddress(pubKey);
    const addr    = util.bufferToHex(addrBuf);
    console.log(addr);

    //console.log("pubKey", pubKey);
    console.log("addrBufaddrBufaddrBuf", util.bufferToHex(pubKey));




    res.end("ok");
  } else {
      res.end("fail");
  }

});




/* route requests for static files to appropriate directory */
var staticPath = path.join(__dirname, '../public/');
app.use('/public', express.static(staticPath))


/* final catch-all route to index.html defined last */
app.get('/*', (req, res) => {
  var htmlFile = path.join(__dirname, '../views/index.html');
  res.sendFile(htmlFile);
})


module.exports = app;
