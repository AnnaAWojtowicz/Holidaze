import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleImage from "../../img/clement-proust-bDGgOlguqJA-unsplash.jpg";
import NoImage from "../../img/simon-berger-2JONUbTfN38-unsplash.jpg";
import Card from 'react-bootstrap/Card';

function ControlledCarousel({ data }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    console.log(data);
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {data && data.media && data.media.length > 0 ? (
                data.media.map((imgData, i) => {
                    let img, alt;
                    let isImgMissing = false;
                    if (imgData && imgData.url) {
                        img = imgData.url;
                        alt = imgData.alt;
                    } else {
                        img = NoImage;
                        alt = "No image available";
                        isImgMissing = true;
                    }
                    console.log(`img: ${img}, alt: ${alt}, isImgMissing: ${isImgMissing}`);
                    return (
                        <Carousel.Item key={i} className="imgContainer2">
                            <Card.Img src={img} alt={alt} className="imgCardBorder imgResponsive" />
                            {isImgMissing && (
                                <div className="card-img-overlay"> <Card.Text className="noImgText">Sorry, no image was provided</Card.Text></div>
                            )}
                        </Carousel.Item>
                    );
                })
            ) : (
                <Carousel.Item className="imgContainer2">
                    <Card.Img src={NoImage} alt="No image available" className="imgCardBorder imgResponsive" />
                    <div className="card-img-overlay"> <Card.Text className="noImgText">Sorry, no image was provided</Card.Text></div>
                </Carousel.Item>
            )}
        </Carousel>
    );
}

export default ControlledCarousel;