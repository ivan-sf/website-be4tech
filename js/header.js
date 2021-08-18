$(function (){
    $(window).scroll(function(){
       if ($(this).scrollTop() > 100) {
        $('.navscroll').addClass("azul");
       } else {
        $(".navscroll").removeClass("azul");
       }
    });
});