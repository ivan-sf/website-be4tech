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
    ease: "circ",visibility:'visible',opacity:1,y:-280
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
    ease: "circ",visibility:'visible',opacity:1,y:-170
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
    ease: "circ",visibility:'visible',opacity:1,y:-60
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

  var swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 70,
      stretch: 40,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  function enviar_ajax(){	
    $.ajax({
    type: 'POST',   
    url: 'mail.php',
    data: $('#form1').serialize(),
    success: function(respuesta) {
        if(respuesta=='ok'){
            botonEnviado();
        }
        else {
            alert('Error al enviar el correo puedes usar otros metodos de contacto. Gracias');
        }
    }
    });
}
function close() {
    $('.body-overflow').css('overflow','visible');
    gsap.to('.menu-open',{
        duration: 3, ease: "circ", opacity:1,y:'-180vh',delay:1
    })
}   
function botonEnviado(){
    $(".boton-enviar").removeClass('sin-procesar');
    $(".boton-enviar").addClass('procesado');
    $(".boton-enviar").val("Enviado");
    $(".boton-enviar").prop("disabled",true);
}

$('.icon-partner-banner').hover(function () {
    $(this).addClass('magictime boingInUp');
});

function inicioActive(){
  $(".nosotros-nav").removeClass("active");
  $(".aliados-nav").removeClass("active");
  $(".asesores-nav").removeClass("active");
  $(".contacto-nav").removeClass("active");
  $(".inicio-nav").addClass("active");
}
function nosotrosActive(){
  $(".asesores-nav").removeClass("active");
  $(".nosotros-nav").addClass("active");
  $(".aliados-nav").removeClass("active");
  $(".contacto-nav").removeClass("active");
  $(".inicio-nav").removeClass("active");
}
function aliadosActive(){
  $(".nosotros-nav").removeClass("active");
  $(".asesores-nav").removeClass("active");
  $(".aliados-nav").addClass("active");
  $(".contacto-nav").removeClass("active");
  $(".inicio-nav").removeClass("active");
}
function contactoActive(){
$(".nosotros-nav").removeClass("active");
$(".asesores-nav").removeClass("active");
$(".aliados-nav").removeClass("active");
$(".contacto-nav").addClass("active");
$(".inicio-nav").removeClass("active");
}
function asesoresActive(){
$(".nosotros-nav").removeClass("active");
$(".asesores-nav").addClass("active");
$(".aliados-nav").removeClass("active");
$(".contacto-nav").removeClass("active");
$(".inicio-nav").removeClass("active");
}




function inicioActiveMobile(){
  close();
  $(".nosotros-nav").removeClass("active");
  $(".aliados-nav").removeClass("active");
  $(".asesores-nav").removeClass("active");
  $(".contacto-nav").removeClass("active");
  $(".inicio-nav").addClass("active");
}
function nosotrosActiveMobile(){
  close();
  $(".asesores-nav").removeClass("active");
  $(".nosotros-nav").addClass("active");
  $(".aliados-nav").removeClass("active");
  $(".contacto-nav").removeClass("active");
  $(".inicio-nav").removeClass("active");
}
function aliadosActiveMobile(){
  close();
  $(".nosotros-nav").removeClass("active");
  $(".asesores-nav").removeClass("active");
  $(".aliados-nav").addClass("active");
  $(".contacto-nav").removeClass("active");
  $(".inicio-nav").removeClass("active");
}
function contactoActiveMobile(){
close();
$(".nosotros-nav").removeClass("active");
$(".asesores-nav").removeClass("active");
$(".aliados-nav").removeClass("active");
$(".contacto-nav").addClass("active");
$(".inicio-nav").removeClass("active");
}
function asesoresActiveMobile(){
close();
$(".nosotros-nav").removeClass("active");
$(".asesores-nav").addClass("active");
$(".aliados-nav").removeClass("active");
$(".contacto-nav").removeClass("active");
$(".inicio-nav").removeClass("active");
}
