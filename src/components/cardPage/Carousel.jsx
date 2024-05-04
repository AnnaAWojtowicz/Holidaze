import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleImage from "../../img/clement-proust-bDGgOlguqJA-unsplash.jpg";

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className="imgContainer2">
                <img src={ExampleImage} className="imgCardBorder imgResponsive" />
            </Carousel.Item>
            <Carousel.Item className="imgContainer2">
                <img src={ExampleImage} className="imgCardBorder imgResponsive" />
            </Carousel.Item>
            <Carousel.Item className="imgContainer2">
                <img src={ExampleImage} className="imgCardBorder imgResponsive" />
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;