$(function (){
    $(window).scroll(function(){
       if ($(this).scrollTop() > 200) {
        $('.navscroll').addClass("azul");
       } else {
        $(".navscroll").removeClass("azul");
       }
    });
});