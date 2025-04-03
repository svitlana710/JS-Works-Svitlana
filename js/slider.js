$(document).ready(function(){
    $('.header-slick').slick({
      autoplay: true,
      infinite: true,
      autoplaySpeed: 4000,
      dots: true,
      speed: 1500,
      fade: true,
    });
  });

  $(document).ready(function() {
    $('.news-slick').slick({
      autoplay: true,
      slidesToShow: 3,
      infinite: true,
      autoplaySpeed: 4000,
      dots: true,
      speed: 1500,
      arrows: true,
      variableWidth: true,
      prevArrow: '<button class="slick-prev"><img src="./assets/img/arrow.svg" alt="arrow"></button>',
      nextArrow: '<button class="slick-next"><img src="./assets/img/arrow.svg" alt="arrow"></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,

            breakpoint: 320,
            settings: {
              slidesToShow: 1,
            }
          }
        }
      ]
    });
  });

          
          