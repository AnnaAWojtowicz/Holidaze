
import React, { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import CardHome from '../CardHome';

import { getUserVenues } from '../../api/getUserVenues';


function OwnerProperties() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchVenues = async () => {
            try {
                const data = await getUserVenues();
                setItems(data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchVenues();
    }, []);



    return (
        <div>
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

export default OwnerProperties;