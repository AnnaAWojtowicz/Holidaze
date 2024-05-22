import React, { useEffect, useState } from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import ExampleImage2 from "../../img/nachelle-nocom-51adhgg5KkE-unsplash.jpg";
import Image from 'react-bootstrap/Image';
import { getUserProfile } from "../../api/userProfile";
import EditModal from "./EditModal";
import NewAndUpdateVenueModal from "./NewAndUpdateVenueModal";
import OwnerProperties from "../profile/OwnerProperties";
import UserBookings from "../profile/UserBookings";

function ProfileSite({ currentUser }) {
    const [userData, setUserData] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showModalNewVenue, setShowModalNewVenue] = useState(false);
    const location = useLocation();


    const fetchUserData = async () => {
        try {
            const ownerName = location.pathname.split('/')[2]; // Assuming the owner's name is the third part of the URL
            const userName = ownerName || localStorage.getItem('userName');
            const data = await getUserProfile(userName);
            setUserData(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, [location.pathname]);

    const isCurrentUserProfile = currentUser && userData && currentUser.name === userData.name;

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


    console.log('User data name:', userData.data.name);
    console.log('Local storage user name:', localStorage.getItem('userName'));
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
                    </ListGroup>
                    <Card.Footer className="footerCardBorder d-flex justify-content-between align-items-center">
                        <Link to="/"><Button variant="outline-success">Go Back</Button></Link>
                        {userData.data.name === localStorage.getItem('userName') && (
                            <Button variant="outline-success" onClick={handleOpenEditModal}>Edit</Button>
                        )}
                        <EditModal
                            show={showEditModal}
                            onHide={handleCloseEditModal}
                            onEdit={handleEdit}
                            userData={userData}
                        />

                    </Card.Footer>
                </Card>
            </div>
            {userData.data.name === localStorage.getItem('userName') && (
                <UserBookings redirectAfterDelate="/profilesite" />
            )}

            <OwnerProperties userName={userData.data.name} redirectAfterDelate="/profilesite" />

        </div>



    );

}

export default ProfileSite;