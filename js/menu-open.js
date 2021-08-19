$( ".menu-header" ).click(function() {
    $('.hidden-overflow').addClass('hidden-overflow');
    gsap.set('.menu-open',{
        opacity: 0,y:0
    })
    gsap.to('.menu-open',{
        duration: 1, ease: "circ", opacity:1,y:'100vh'
    })
  });