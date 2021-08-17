gsap.from('.header',{
    y: '-25vh', opacity:0
})
gsap.to('.header',{
    duration: 5, ease: "ease",x: 0, y: 0, opacity: 1
})
  
gsap.set('.human-banner',{
    duration: 0, x: 0, y: '-80vh', opacity: 0
})
gsap.to('.human-banner',{
    duration: 1.5, ease: "bounceInTop", opacity: 1, delay: 4, y:0
})

  
gsap.set('.logo-banner',{
    opacity: 0
})
gsap.to('.logo-banner',{
    duration: 4, ease: "fadeIn",  delay: 4, opacity:1
})
  
  
  
gsap.set('.img-banner',{
    opacity: 0
})
gsap.to('.img-banner',{
    duration: 3, ease: "elastic", opacity: 1, delay: 4
})

