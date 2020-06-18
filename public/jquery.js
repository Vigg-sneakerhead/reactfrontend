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
        767:{
          items:2,
        },
        1200:{
          items:3,
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
        767:{
          items:2,
        },
        1200:{
          items:3,
        }
      }
    })
    
})

