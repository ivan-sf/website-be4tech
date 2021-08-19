$( ".menu-header" ).click(function() {
    $('.body-overflow').css('overflow','hidden');
    gsap.set('.menu-open',{
        opacity: 0,y:0
    })
    gsap.to('.menu-open',{
        duration: 1, ease: "circ", opacity:1,y:'150vh'
    })
  });