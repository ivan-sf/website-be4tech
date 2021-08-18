$(function (){
    $(window).scroll(function(){
       if ($(this).scrollTop() > 400) {
        $('.navscroll').addClass("azul");
       } else {
        $(".navscroll").removeClass("azul");
       }
    });
});