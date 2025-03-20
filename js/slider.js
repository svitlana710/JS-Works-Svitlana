$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1700,
    dots: true,
    infinite: true,
    fade: true,
  });

  $('.partners__block').slick({
      infinite: true,
      slidesToShow: 9,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button class="slick-prev"><svg class="icon"><use xlink:href="./assets/svg/sprite.svg#arrow-left"></use></svg></button>',
      nextArrow: '<button class="slick-next"><svg class="icon"><use xlink:href="./assets/svg/sprite.svg#arrow-right"></use></svg></button>',

      responsive:[
        {
          breakpoints: 320,
          settings: {
            arrows:false,
            dots:true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  });

  $('.arrivals__products').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button class="slick-prev"><svg class="icon"><use xlink:href="./assets/svg/sprite.svg#arrow-left"></use></svg></button>',
      nextArrow: '<button class="slick-next"><svg class="icon"><use xlink:href="./assets/svg/sprite.svg#arrow-right"></use></svg></button>',

      responsive:[
        {
          breakpoints: 320,
          settings: {
            arrows:false,
            dots:true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  });
});