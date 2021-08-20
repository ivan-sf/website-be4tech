$( ".menu-header" ).click(function() {
    $('.body-overflow').css('overflow','hidden');
    gsap.to('.menu-open',{
        duration: 1, ease: "circ", opacity:1,y:'180vh',delay:1
    })
    $('body,html').animate({scrollTop : 0}, 500);
    return false
  });

  $( ".close-menu" ).click(function() {
    $('.body-overflow').css('overflow','visible');
    gsap.to('.menu-open',{
        duration: 3, ease: "circ", opacity:1,y:'-180vh',delay:1
    })
  })

  $(".conv-iot").hover(function(){
    gsap.to('.tooltip-conv-iot',{
     ease: "circ",visibility:'visible',y:40,opacity:1  
    })
  }, function(){
    gsap.to('.tooltip-conv-iot',{
      ease: "circ",visibility:'hidden',y:-40,opacity:0
     });
     return false;
  });

  $(".conv-ia").hover(function(){
    gsap.to('.tooltip-conv-ia',{
     ease: "circ",visibility:'visible',y:40,opacity:1  
    })
  }, function(){
    gsap.to('.tooltip-conv-ia',{
      ease: "circ",visibility:'hidden',y:-40,opacity:0
     });
     return false;
  });

  $(".conv-bd").hover(function(){
    gsap.to('.tooltip-conv-bd',{
     ease: "circ",visibility:'visible',y:25,opacity:1 
    })
  }, function(){
    gsap.to('.tooltip-conv-bd',{
      ease: "circ",visibility:'hidden',y:-25,opacity:0
     });
     return false;
  });
