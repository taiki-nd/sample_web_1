$(function(){

  $('.toggle_btn').on('click', function(){
    if (!$('#header').hasClass('open')){
      $('#header').addClass('open');
    }else{
      $('#header').removeClass('open');
    }
  });

  $('#mask').on('click', function(){ 
    $('#header').removeClass('open');
  });


  $('a[href^="#"]').click(function(){
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
  });


});

