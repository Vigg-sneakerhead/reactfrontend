import React, { useState } from 'react';
import Slider from 'react-slick';
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import ArrowRight from "@material-ui/icons/ArrowRight";
import Card from '../Card/Card';
import './Carousel.css';
// import { ProductConsumer } from '../../context';

const Carousel = () => {  
    const [products, setProducts] = useState([
        {
            New: true,
            count: 0,
            id: 1,
            img: "img/product-1.jpg",
            inCart: false,
            price: 10,
            size: 5,
            title: "NIKE AIR FORCE 1 TYPE WHITE GOLD"
        },
        {
            New: true,
            count: 0,
            id: 1,
            img: "img/product-1.jpg",
            inCart: false,
            price: 10,
            size: 5,
            title: "NIKE AIR FORCE 1 TYPE WHITE GOLD"
        },
        {
            New: true,
            count: 0,
            id: 1,
            img: "img/product-1.jpg",
            inCart: false,
            price: 10,
            size: 5,
            title: "NIKE AIR FORCE 1 TYPE WHITE GOLD"
        },
        {
            New: false,
            count: 0,
            id: 1,
            img: "img/product-1.jpg",
            inCart: false,
            price: 10,
            size: 5,
            title: "NIKE AIR FORCE 1 TYPE WHITE GOLD"
        },
        {
            New: false,
            count: 0,
            id: 1,
            img: "img/product-1.jpg",
            inCart: false,
            price: 10,
            size: 5,
            title: "NIKE AIR FORCE 1 TYPE WHITE GOLD"
        },
        {
            New: false,
            count: 0,
            id: 1,
            img: "img/product-1.jpg",
            inCart: false,
            price: 10,
            size: 5,
            title: "NIKE AIR FORCE 1 TYPE WHITE GOLD"
        },
    ]);

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
                products.map(product => 
                    <Card key={product.id} product={product}/>
                )
            }
        </Slider>
    );
    
};

export default Carousel;