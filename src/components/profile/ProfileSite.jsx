import React, { useEffect, useState } from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import { getUserProfile } from "../../api/userProfile";
import EditModal from "./EditModal";
import NewAndUpdateVenueModal from "./NewAndUpdateVenueModal";
import OwnerProperties from "../profile/OwnerProperties";
import UserBookings from "../profile/UserBookings";
import { useParams } from "react-router-dom";


function ProfileSite({ currentUser }) {
    const [userData, setUserData] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showModalNewVenue, setShowModalNewVenue] = useState(false);
    const location = useLocation();
    const { name } = useParams();
    const userName = localStorage.getItem('userName');

    const fetchUserData = async () => {
        try {
            console.log(name);
            const data = await getUserProfile(name);
            setUserData(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, [name]);

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
                        {name === userName && (
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
            {name === userName && (
                <UserBookings redirectAfterDelate={`/profilesite/${name}`} />
            )}

            <OwnerProperties userName={userData.data.name} redirectAfterDelate={`/profilesite/${name}`} />

        </div>



    );

}

export default ProfileSite;