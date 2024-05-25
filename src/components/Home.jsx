import React, { useEffect, useState, useContext } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardHome from './CardHome';
import CarouselHome from './CarouselHome';
import { apiVenuesPath, apiVenuesSearchPath } from '../api/constants';
import HolidazeContext from "../components/HolidazeContext";
import PaginationElement from './Pagination';

function Home() {
    const [items, setData] = useState([]);
    const { inputValue, setInputValue } = useContext(HolidazeContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchVenues = async () => {
            const fetchUrl = inputValue
                ? `${apiVenuesSearchPath}${inputValue}`
                : `${apiVenuesPath}?limit=99&page=${currentPage}`;
            try {
                const response = await fetch(fetchUrl);
                const data = await response.json();
                setData(data.data);
                setTotalPages(data.meta.pageCount);
            } catch (error) {
                console.error('API request failed:', error);
                console.error('Current data:', items);
            }
        };
        fetchVenues();
    }, [inputValue, currentPage]);

    return (
        <div>
            <div>
                <CarouselHome />
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
            <PaginationElement currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </div>
    );
}

export default Home;