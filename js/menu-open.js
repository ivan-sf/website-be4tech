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