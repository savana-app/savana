$(document).ready(function() {

  console.log("address here",web3.eth.coinbase);
  $("#explainmessage").text('You need use that (' + String(web3.eth.coinbase).substring(0,10)+'...)  ethereum addresses private key  or change address from metamask.')
  $('#ethadddr').append(String(web3.eth.coinbase).substring(0,10));
  //encplease

  $("#logmein").click(function (){
     console.log("encrypt works correctly.");
     var privatekey = $("#pkey").val();
     $.ajax({
       type:'POST',
       url:'/LoginWithPKEY/',
       data:{privatekey: privatekey},
       success:function(msg){
         console.log(msg);
         if (msg["response"] == "ok") {
           console.log(msg);
          }
         else {
              console.log(msg);
         }
       },
     });

});






  $("#logmein").click(function (){
     console.log("encrypt works correctly.");
     var privatekey = $("#pkey").val();
     $.ajax({
       type:'POST',
       url:'/LoginWithPKEY/',
       data:{privatekey: privatekey},
       success:function(msg){
         console.log(msg);
         if (msg["response"] == "ok") {
           console.log(msg);
          }
         else {
              console.log(msg);
         }
       },
     });

});




   $("#signmessage").click(function () {
   const message = web3.sha3("Hello from savana22!")
   console.log('messageqq', message);
   console.log(web3.eth.coinbase);

   web3.eth.sign(web3.eth.coinbase, message , function (err, signature) {
     console.log("signed message here", signature);
     console.log("messageqq", message);


     $.ajax({
       type:'POST',
       url:'/getSign/',
       data:{signature: signature, message:message},
       success:function(msg){
         console.log(msg);
         if (msg["response"] == "ok") {
           console.log(msg);
          }
         else {
              console.log(msg);
         }
       },
     });
   });
});






    window.addEventListener('load', async () => {
      // Modern dapp browsers...
      if (window.ethereum) {
          window.web3 = new Web3(ethereum);
          try {
              // Request account access if needed
              await ethereum.enable();
              // Acccounts now exposed
              web3.eth.sendTransaction({/* ... */});
          } catch (error) {
              // User denied account access...
          }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
          window.web3 = new Web3(web3.currentProvider);
          // Acccounts always exposed
          web3.eth.sendTransaction({/* ... */});
      }
      // Non-dapp browsers...
      else {
          console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
    });




 });
