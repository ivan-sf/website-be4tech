$( ".menu-header" ).click(function() {
    $('.body-overflow').css('overflow','hidden');
    gsap.to('.menu-open',{
        duration: 1, ease: "circ", opacity:1,y:'180vh',delay:1
    })
  });

  $( ".close-menu" ).click(function() {
    $('.body-overflow').css('overflow','visible');
    gsap.to('.menu-open',{
        duration: 1, ease: "circ", opacity:1,y:'-180vh',delay:1
    })
  })