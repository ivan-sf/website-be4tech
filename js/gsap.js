gsap.set('.header',{
    y: '-15vh', opacity:0
})
gsap.to('.header',{
    duration: 4, ease: "ease",x: 0, y: 0, opacity: 1
})
  
// gsap.set('.human-banner',{
//     duration: 0, x: 0, y: '-80vh', opacity: 0
// })
// gsap.to('.human-banner',{
//     duration: 1.5, ease: "bounceInTop", opacity: 1, delay: 4, y:0
// })

gsap.set('.img-2-banner',{
    duration: 0, x: 0, y: '-80vh', opacity: 0
})
gsap.to('.img-2-banner',{
    duration: 1, ease: "bounceInTop", opacity: .4, delay: 3, y:0
})

  
gsap.set('.logo-banner',{
    opacity: 0
})
gsap.to('.logo-banner',{
    duration: 2, ease: "fadeIn",  delay: 3, opacity:1
})

gsap.set('.scroll-icon',{
    opacity: 0, y: '50vh'
})
gsap.to('.scroll-icon',{
    duration: 2, ease: "fadeIn",  delay: 2, opacity:1, y: 0
})
  
  
  
// gsap.set('.img-banner',{
//     opacity: 0
// })
// gsap.to('.img-banner',{
//     duration: 3, ease: "elastic", opacity: 1, delay: 4
// })


