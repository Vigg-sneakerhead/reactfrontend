import React, { Component} from 'react';
import Slider from 'react-slick';
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import ArrowRight from "@material-ui/icons/ArrowRight";
import './Carousel.css';

class SellCarousel extends Component {  

    render() {
        const settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          nextArrow: <ArrowRight className ="text-dark"/>,
          prevArrow: <ArrowLeft  className ="text-dark"/>,
        };
        return (
          <div>
            <Slider {...settings}>
              <div>
                <img 
                        alt="background"
                        className="background" 
                        src="assets/images/sell1.jpg"
                        style={{"position":"relative", "zIndex":-1, objectFit:'contain', height: '100%', width: '100%'}}
                    />
              </div>
              <div>
                <img 
                        alt="background"
                        className="background" 
                        src="assets/images/sell2.jpg"
                        style={{"position":"relative", "zIndex":-1, objectFit:'contain', height: '100%', width: '100%'}}
                    />
              </div>
              <div>
                <img 
                        alt="background"
                        className="background" 
                        src="assets/images/sell3.jpg"
                        style={{"position":"relative", "zIndex":-1, objectFit:'contain', height: '100%', width: '100%'}}
                    />
              </div>
              <div>
                <img 
                        alt="background"
                        className="background" 
                        src="assets/images/sell4.jpg"
                        style={{"position":"relative", "zIndex":-1, objectFit:'contain', height: '100%', width: '100%'}}
                    />
              </div>
    
            </Slider>
          </div>
        );
      }
};

export default SellCarousel;