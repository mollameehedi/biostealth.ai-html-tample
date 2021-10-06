$('.memberImages').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.membersDetails',
    infinite: true,
    autoplay: true,
    centerMode: true,
  });
  $('.membersDetails').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.memberImages',
    dots: false,
    infinite: true,
    arrows:false,
    autoplay: true,
    centerMode: false,
  });

  $('.venobox').venobox(); 