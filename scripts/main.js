let prevBtn = `<span class="slick-prev"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_163_59" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
<rect width="24" height="24" transform="matrix(-1 0 0 1 24 0)" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_163_59)">
<path d="M15.975 22L17.75 20.225L9.525 12L17.75 3.775L15.975 2L5.975 12L15.975 22Z" fill="#1C1B1F"/>
</g>
</svg></span>`;

let nextBtn = `<span class="slick-next"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_1_529" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
<rect width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_1_529)">
<path d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2L18.025 12L8.025 22Z" fill="#1C1B1F"/>
</g>
</svg></span>`;

//catagory slider settings
$(".cat-slider").slick({
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
        slidesToScroll: 3,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

//featured slider settings
$(".featured-slider, .best-slider").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  prevArrow: prevBtn,
  nextArrow: nextBtn,

  touchThreshold: 10,
  responsive: [
    {
      breakpoint: 1367,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        arrows: false,
      },
    },

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
