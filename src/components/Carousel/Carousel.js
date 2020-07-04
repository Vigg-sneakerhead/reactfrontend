import React, { Component } from 'react';
import Slider from 'react-slick';
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import ArrowRight from "@material-ui/icons/ArrowRight";
import Card from '../Card/Card';
import img from '../product-1.jpg';
import './Carousel.css';

class Carousel extends Component {
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
        };
        return (
            <div>
                <Slider {...settings}>
                    <Card img={img} price={999} condition={this.props.condition} title="SOME VERY COOL NICE SHOES YELLOW OUT THERE"/>
                    <Card img={img} price={999} condition={this.props.condition} title="SOME VERY COOL NICE SHOES YELLOW OUT THERE"/>
                    <Card img={img} price={999} condition={this.props.condition} title="SOME VERY COOL NICE SHOES YELLOW OUT THERE"/>
                    <Card img={img} price={999} condition={this.props.condition} title="SOME VERY COOL NICE SHOES YELLOW OUT THERE"/>
                    <Card img={img} price={999} condition={this.props.condition} title="SOME VERY COOL NICE SHOES YELLOW OUT THERE"/>
                    <Card img={img} price={999} condition={this.props.condition} title="SOME VERY COOL NICE SHOES YELLOW OUT THERE"/>
                </Slider>
            </div>
        );
    }
};

export default Carousel;