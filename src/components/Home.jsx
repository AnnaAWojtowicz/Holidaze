import React, { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import CardHome from './CardHome';
import CarouselHome from './CarouselHome';
import { apiVenuesPath, apiVenuesSearchPath } from '../api/constants';
import HolidazeContext from "../components/HolidazeContext";

function Home() {
    const [items, setData] = useState([]);
    const { inputValue, setInputValue } = useContext(HolidazeContext);

    useEffect(() => {
        const fetchUrl = inputValue
            ? `${apiVenuesSearchPath}${inputValue}`
            : apiVenuesPath;

        fetch(fetchUrl)
            .then((response) => response.json())
            .then((response) => {
                console.log('Response data:', response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.error('API request failed:', error);
                console.error('Current data:', items);
            });
    }
        , [inputValue]);

    return (
        <div>
            <div style={{ height: '500px' }}>
                <div style={{ width: '100%' }}>
                    <CarouselHome />
                </div>
            </div>
            {items.length === 0 && <h1 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '3rem 0' }}>Sorry, no results found</h1>}
            <Row xs={1} md={2} lg={3} className="g-4 my-5 mx-2">

                {items.map((item, index) => {
                    const img = item.media && item.media.length > 0 ? item.media[0].url : '';
                    const alt = item.media && item.media.length > 0 ? item.media[0].alt : '';
                    return (
                        <Col key={index} >
                            <CardHome card={item} />
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
}

export default Home;