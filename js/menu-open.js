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


  $(".title-icon-iot").hover(function(){
    gsap.to('.icon-img-iot',{
      ease: "circ",y:-25,
     })
    gsap.from('.content-iot',{
      x:-250,y:-280
    })
    gsap.to('.content-iot',{
    ease: "circ",visibility:'visible',opacity:1,x:70,y:-280
    })
  }, function(){
    gsap.to('.icon-img-iot',{
      ease: "circ",y:0,delay:0.3
     })
    gsap.to('.content-iot',{
      ease: "circ",visibility:'visible',opacity:0,x:0,y:-280
     });
     return false;
  });

  $(".title-icon-ia").hover(function(){
    gsap.to('.icon-img-ia',{
      ease: "circ",y:-25,
     })
    gsap.from('.content-ia',{
      x:-250,y:-160
    })
    gsap.to('.content-ia',{
    ease: "circ",visibility:'visible',opacity:1,x:70,y:-170
    })
  }, function(){
    gsap.to('.icon-img-ia',{
      ease: "circ",y:0,delay:0.3
     })
    gsap.to('.content-ia',{
      ease: "circ",visibility:'visible',opacity:0,x:0,y:-170
     });
     return false;
  });

  $(".title-icon-bd").hover(function(){
    gsap.to('.icon-img-bd',{
      ease: "circ",y:-25,
     })
    gsap.from('.content-bd',{
      x:-250,y:-60
    })
    gsap.to('.content-bd',{
    ease: "circ",visibility:'visible',opacity:1,x:70,y:-60
    })
  }, function(){
    gsap.to('.icon-img-bd',{
      ease: "circ",y:0,delay:0.3
     })
    gsap.to('.content-bd',{
      ease: "circ",visibility:'visible',opacity:0,x:0,y:-60
     });
     return false;
  });
