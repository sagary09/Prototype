$(document).ready(function(){
    $("#click1").click(function() {
    $('html, body').animate({
        scrollTop: $("#section2").offset().top
    }, 1000);
  });
});
