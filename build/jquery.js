$(document).ready(function() {
    $('#new-releases').owlCarousel({
      nav: true,
      autoplay: true,
      responsiveClass:true,
      dots:true,
      responsive:{
        0:{
          items:1,
        },
        400:{
          items:2,
        },
        800:{
          items:3,
        },
        1200:{
          items:4,
        }
      }
    })

    $('#second-hand').owlCarousel({
      nav: true,
      autoplay: true,
      responsiveClass:true,
      responsive:{
        0:{
          items:1,
        },
        400:{
          items:2,
        },
        800:{
          items:3,
        },
        1200:{
          items:4,
        }
      }
    })
    
})

