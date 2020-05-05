import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './home-carousel.scss';

const HomeCarousel = () => {

    return(
        <div className="carousel-container">
            <Carousel interval="1000">
                <Carousel.Item>
                    <img
                        className="d-block"
                        width="150px"
                        src={require('../../assets/img/python-logo.png')}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        width="150px"
                        src={require('../../assets/img/js-logo.png')}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        width="150px"
                        src={require('../../assets/img/wp-logo.png')}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HomeCarousel;