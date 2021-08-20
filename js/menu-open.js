
1
2
3
4
5
6
7
$(document).ready(function(){
	$("#prueba").hover(function(){
		$("#prueba").css("background-color", "#000000");
		}, function(){
			$("#prueba").css("background-color", "#C3C3C3");
		});
});


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
    alert("hola mundo")
  })
  