import React from 'react';
import './hero.css'
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from '../../kit/ExampleCarouselImage/carouselImage';
import LightButton from "../../kit/lightButton/lightButton";
import DarkButton from "../../kit/darkButton/darkButton";

function Hero(props) {
    return (
        <Carousel className="my-fs-4">
            <Carousel.Item className="w-100 vh100">
                <CarouselImage text="First slide" src={props.img1} className="vh100"/>
                <Carousel.Caption className="txt-hero txt1-hero ">
                    <div className="smBox">
                    <p className="rem2 colorRose">{props.p1}</p>
                    <h1 className="rem3 fw-800">{props.header1}</h1>
                    <LightButton>Buy Now</LightButton>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="w-100 vh100">
                <CarouselImage text="Second slide" src={props.img2} className="vh100"/>
                <Carousel.Caption className="txt-hero txt2-hero slidText2 text-center">
                    <div className="smBox newPoint">
                    <p className="rem2 text-center colorRose w-100 text-center">{props.p2}</p>
                    <h1 className="rem3 text-center colorBlue fw-800">{props.header2}</h1>
                    <DarkButton>Buy Now</DarkButton>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="w-100 vh100">
                <CarouselImage text="Third slide" src={props.img3} className="vh100"/>
                <Carousel.Caption className="txt-hero txt1-hero text-center">
                    <div className="smBox">
                    <p className="rem2 colorRose">{props.p3}</p>
                    <h1 className="rem3 fw-800">{props.header3}</h1>
                    <LightButton>Buy Now</LightButton>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Hero;