window.onload=function pageReady(){
    setTimeout(function(){
        $('#preloader').fadeOut();
        $('.hidden-overflow').removeClass('hidden-overflow');
        $('.hidden').removeClass('hidden');
   }, 2000);
}