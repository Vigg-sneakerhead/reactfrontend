import React, { Component} from 'react';
import Slider from 'react-slick';
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import ArrowRight from "@material-ui/icons/ArrowRight";
import Card from '../Card/Card';
import './Carousel.css';
import WithContext from '../../hoc';

class Carousel extends Component {  
    state = {
        products: []
    }

    static getDerivedStateFromProps(props, state) {
        return { products: props.value.products };
    }

    render() {
        const settings = {
            infinite: false,
            centerPadding: '0px',
            slidesToShow: 4,
            swipeToSlide: true,
            pauseOnHover: true,
            autoplay: false,
            speed: 300,
            nextArrow: <ArrowRight/>,
            prevArrow: <ArrowLeft/>,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 765,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
            ]
        }
    return (
        <Slider {...settings}>
            {
                this.state.products.map(product => {
                    if ((product.New === true) && (this.props.condition === "New")) {
                        return <Card key={product.id} product={product}/>
                    }
                    if ((product.New === false) && (this.props.condition === "Old")) {
                        return <Card key={product.id} product={product}/>
                    }
                })
            }
        </Slider>
    );
    }
};

export default WithContext(Carousel);