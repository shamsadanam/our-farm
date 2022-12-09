//catagory slider settings
$(".cat-slider").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  dots: false,
  prevArrow: false,
  nextArrow: false,
  touchThreshold: 10,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 4.5,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 421,
      settings: {
        slidesToShow: 3.5,
        slidesToScroll: 2,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

//featured slider settings
