$(document).ready(function(){


    var controller = new ScrollMagic.Controller();
   
    $('section').each(function(){

        var pinIntroScene2 = new ScrollMagic.Scene({
    
            triggerElement: this,
            triggerHook: 'onLeave'
            // duration: '10%'
        })
        .setPin(this)
        .addTo(controller);
    })

    
       
        $('.button__up').click(function() {
          $("html, body").animate({
            scrollTop:0
          },1500);
        })
      
});

