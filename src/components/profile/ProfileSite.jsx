import React, { useEffect, useState } from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ExampleImage2 from "../../img/nachelle-nocom-51adhgg5KkE-unsplash.jpg";
import Image from 'react-bootstrap/Image';
import { getUserProfile } from "../../api/userProfile";
import EditModal from "./EditModal";
import NewAndUpdateVenueModal from "./NewAndUpdateVenueModal";
import OwnerProperties from "../profile/OwnerProperties";
import UserBookings from "../profile/UserBookings";

function ProfileSite(props) {
    const [userData, setUserData] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showModalNewVenue, setShowModalNewVenue] = useState(false);

    const fetchUserData = async () => {
        try {
            const data = await getUserProfile();
            setUserData(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleShowModalNewVenue = () => setShowModalNewVenue(true);
    const handleCloseModalNewVenue = () => setShowModalNewVenue(false);

    const handleEdit = () => {
        fetchUserData();
        setShowEditModal(false);
    };

    const handleOpenEditModal = () => {
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        debugger;
        setShowEditModal(false);
    };

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="my-5 cardPage">
                <Card className="mx-4 cardBorder cardWidth">
                    <div style={{
                        backgroundImage: `url(${userData.data.banner.url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }} className="d-flex justify-content-center align-items-center imgCardBorder">
                        <Image src={userData.data.avatar.url} alt={userData.data.avatar.alt || "Profile Avatar"} className="imgProfile2" />
                    </div>
                    <Card.Header className='bodyCardBorder'>
                        <Card.Title className="nameCardProfile">{userData.data.name}</Card.Title>
                    </Card.Header>
                    <ListGroup className="list-group-flush bodyCardBorder">
                        <ListGroup.Item>
                            <div className="profileInfo">Contact:</div>
                            <div className="profileInfoDetails">{userData.data.email}</div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="profileInfo">About:</div>
                            <div className="profileInfoDetails">{userData.data.bio}</div>
                        </ListGroup.Item>
                        {/* <ListGroup.Item>
                        <div>
                            <div className="profileInfo">Your bookings:</div>
                        </div>
                        <div>
                            <div className="profileInfo">Coming:</div>
                        </div>
                    </ListGroup.Item> 
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                        <div><div className="profileInfo">Your Properties:</div></div>
                        <Button variant="outline-success" onClick={handleShowModalNewVenue}>Add new</Button>
                        <NewVenueModal
                            show={showModalNewVenue}
                            // show={true}
                            onHide={handleCloseModalNewVenue}
                        />
                    </ListGroup.Item>*/}
                    </ListGroup>
                    <Card.Footer className="footerCardBorder d-flex justify-content-between align-items-center">
                        <Link to="/"><Button variant="outline-success">Go Back</Button></Link>
                        <Button variant="outline-success" onClick={handleOpenEditModal}>Edit</Button>
                        <EditModal
                            show={showEditModal}
                            onHide={handleCloseEditModal}
                            onEdit={handleEdit}
                            userData={userData}
                        />
                    </Card.Footer>
                </Card>
            </div>
            <UserBookings redirectAfterDelate="/profilesite" />
            <div>
                <OwnerProperties redirectAfterDelate="/profilesite" />
            </div>
        </div>



    );

}

export default ProfileSite;