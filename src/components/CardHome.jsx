import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NoImage from "../img/simon-berger-2JONUbTfN38-unsplash.jpg";

function CardHome({ img, alt, name, price }) {
    return (<Card className='cardBorder mx-3'>
        <div className='imgContainer'>
            {img ? (<Card.Img variant="top" src={img} alt={alt} className='imgCardBorder imgResponsive' />
            ) : (
                <div>
                    <Card.Img variant="top" src={NoImage} alt="No image available" className='imgCardBorder imgResponsive' />
                    <Card.ImgOverlay> <Card.Text>Sorry, no image was provided</Card.Text></Card.ImgOverlay>
                </div>
            )}
        </div>
        <Card.Body className='bodyCardBorder'>
            <Card.Title>{name}</Card.Title>
            {/* <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
            </Card.Text> */}
        </Card.Body>
        <Card.Footer className="footerCardBorder d-flex justify-content-between align-items-center">
            <span>${price} / night</span>
            <Link to="/cardPage"><Button variant="outline-success">More</Button></Link>
        </Card.Footer>
    </Card>);

    // return (
    //     <Card className="bg-dark text-white cardBorder mx-3">
    //         {img ? (
    //             <div>
    //                 <Card.Img src={img} alt={alt} className='imgCardBorder imgResponsive' />
    //                 <Card.ImgOverlay>
    //                     <Card.Title>{name}</Card.Title>
    //                     <div className="d-flex justify-content-between align-items-center">
    //                         <Card.Text>${price} / night</Card.Text>
    //                         <Link to="/cardPage"><Button variant="outline-success">More</Button></Link>
    //                     </div>
    //                 </Card.ImgOverlay>
    //             </div>
    //         ) : (
    //             <div>
    //                 <Card.Img src={NoImage} alt="No image available" className='imgCardBorder imgResponsive' />
    //                 <Card.ImgOverlay>
    //                     <Card.Title>Sorry, no image available</Card.Title>
    //                     <div className="d-flex justify-content-between align-items-center">
    //                         <Card.Text>${price} / night</Card.Text>
    //                         <Link to="/cardPage"><Button variant="outline-success">More</Button></Link>
    //                     </div>
    //                 </Card.ImgOverlay>
    //             </div>
    //         )}
    //     </Card>
    // );




}

export default CardHome;