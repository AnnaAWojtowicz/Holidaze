import React, { useEffect, useState } from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ExampleImage2 from "../../img/nachelle-nocom-51adhgg5KkE-unsplash.jpg";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getUserProfile } from "../../api/userProfile";



function ProfileSite() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await getUserProfile();
                setUserData(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUserData();
    }, []);

    if (!userData) {
        return <div>Loading...</div>;
    }
    console.log(userData);
    return (
        <Container className="containerProfile">
            <Row>
                <Col className="d-flex justify-content-center" fluid>
                    <Image src={userData.data.avatar.url} alt={userData.data.avatar.alt || "Profile Avatar"} className="imgProfile" />
                </Col>
                <Col className="d-flex justify-content-center cardPage" >
                    <div className="cardProfile">
                        <Card className="mx-4 cardBorder cardProfile">
                            <Card.Header className='bodyCardBorder'>
                                <Card.Title className="nameCardProfile">{userData.data.name}</Card.Title>
                            </Card.Header>
                            <ListGroup className="list-group-flush bodyCardBorder">
                                <ListGroup.Item>
                                    <div>Contact: {userData.data.email}</div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div>About: {userData.data.bio}</div>
                                </ListGroup.Item>
                                <ListGroup.Item><div>Your bookings:</div>
                                    <div>Coming</div>
                                    <div>Past</div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div>Your Properties:</div>
                                </ListGroup.Item>
                            </ListGroup>

                            <Card.Footer className="footerCardBorder d-flex justify-content-between align-items-center">
                                <Link to="/"><Button variant="outline-success">Go Back</Button></Link>
                                <Link to="/cardPage"><Button variant="outline-success">Edit</Button></Link>
                            </Card.Footer>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ProfileSite;