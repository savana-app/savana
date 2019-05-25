// Custom Scripts for Array Template //

jQuery(function($) {
    "use strict";

        // get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
        var mainbottom = $('#main').offset().top;

        // on scroll,
        $(window).on('scroll',function(){

        // we round here to reduce a little workload
        stop = Math.round($(window).scrollTop());
        if (stop > mainbottom) {
            $('.navbar').addClass('past-main');
            $('.navbar').addClass('effect-main')
        } else {
            $('.navbar').removeClass('past-main');
       }

      });


  // Collapse navbar on click

   $(document).on('click.nav','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
    $(this).removeClass('in').addClass('collapse');
   }
  });


    /*-----------------------------------
    ----------- Scroll To Top -----------
    ------------------------------------*/

    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 1000) {
          $('#back-top').fadeIn();
      } else {
          $('#back-top').fadeOut();
      }
    });
    // scroll body to 0px on click
    $('#back-top').on('click', function () {
      $('#back-top').tooltip('hide');
      $('body,html').animate({
          scrollTop: 0
      }, 1500);
      return false;
    });


    /*-------- Owl Carousel ---------- */

      $(".review-cards").owlCarousel({
        slideSpeed: 200,
        items: 1,
        singleItem: true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        pagination: false,
      });


  /* ------ jQuery for Easing min -- */
  (function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 54)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').on('click', function() {
      $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 54
    });

  })(jQuery); // End of use strict


/* --------- Wow Init ------ */

  new WOW().init();


  /* ----- Counter Up ----- */

$('.counter').counterUp({
		delay: 10,
		time: 1000
});

/*----- Preloader ----- */

    $(window).on('load', function() {
  		setTimeout(function() {
        $('#loading').fadeOut('slow', function() {
        });
      }, 3000);
    });


/*----- Subscription Form ----- */

$(document).ready(function() {




   $("#signmessage").click(function (){


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



     //window.alert(result);

     //web3.personal.ecRecover(message, result, function (err, result) {
     //   console.log("pu yayayya",err, result);
     //  });



   });


         //ethereumjs-util

        //const msg = 'dinosaur';
        //const msgHash = ethereumJsUtil.sha3(msg);
        // The rest is the same as above
        //const signatureBuffer = ethereumJsUtil.toBuffer(signature);
        //const signatureParams = ethereumJsUtil.fromRpcSig(signatureBuffer);
        //const publicKey = ethereumJsUtil.ecrecover(
        //  msgHash,
        //  signatureParams.v,
        //  signatureParams.r,
        //  signatureParams.s
        //);
        //const addressBuffer = ethereumJsUtil.publicToAddress(publicKey);
        //const address = ethereumJsUtil.bufferToHex(addressBuffer);




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






     // jQuery Validation
     $("#chimp-form").validate({
         // if valid, post data via AJAX
         submitHandler: function(form) {
             $.post("assets/php/subscribe.php", { email: $("#chimp-email").val() }, function(data) {
                 $('#response').html(data);
             });
         },
         // all fields are required
         rules: {
             email: {
                 required: true,
                 email: true
             }
         }
     });
 });

});
