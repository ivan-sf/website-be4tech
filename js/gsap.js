//Header Responsive
function myFunction(x) {
    if (x.matches) { // If media query matches
      x.addListener(myFunction) 
      gsap.set('.header',{
          duration: 0, y: '-55vh', opacity:0
      })
      gsap.to('.header',{
          duration: 2, ease: "ease", opacity: 1, delay: 2.7,x: 0, y: 0,
      })
  
    } else {
      x.addListener(myFunction) 
      gsap.set('.header',{
          duration: 0, x: '-55vw', y: 0,
      })
      gsap.to('.header',{
          duration: 5, ease: "ease", opacity: 1, delay: 0,x: 0, y: 0,
      })
  
    }
  }
  
var x = window.matchMedia("(max-width: 620px)")


myFunction(x) // Call listener function at run time
x.addListener(myFunction) 
  
  
  
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

