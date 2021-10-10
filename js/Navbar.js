$('body').scrollspy({target:".navbar"});

$offset = $('.navbar').offset().top;

$(window).scroll(function(){
    $scrolling = $(this).scrollTop();
    if($scrolling > $offset){
      $('.navbar').addClass('nav-fixed');
    }
    else{
      $('.navbar').removeClass('nav-fixed');
    }
    if($scrolling > 1000){
      $('#back-to').fadeIn();
    }
    else{
      $('#back-to').fadeOut();
    }
  })
  
  $('#back-to').click(function(){
    $('html').animate({
      scrollTop:0,
    },1200)
  })
  
  