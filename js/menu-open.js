$( ".menu-header" ).click(function() {
    $('body,html').animate({scrollTop : 0}, 500);
    $('.body-overflow').css('overflow','hidden');
        gsap.to('.menu-open',{
        duration: 1, ease: "circ", opacity:1,y:'180vh',delay:1
    })
  });

  $( ".close-menu" ).click(function() {
    $('.body-overflow').css('overflow','visible');
    gsap.to('.menu-open',{
        duration: 5, ease: "circ", opacity:0,y:'-180vh'
    })
  })