import react from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import NewAndUpdateVenueModal from "./NewAndUpdateVenueModal";
import EditModal from "./EditModal";


function ProfileCard({ ownerData, isOwnerView, userData, handleShowModalNewVenue, handleCloseModalNewVenue, showModalNewVenue, handleOpenEditModal, handleCloseEditModal, showEditModal, handleEdit }) {
    return (
        <Card className="mx-4 cardBorder">
            <div style={{
                backgroundImage: `url(${userData?.banner?.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }} className="d-flex justify-content-center align-items-center imgCardBorder">
                <Image src={userData?.avatar?.url} alt={userData?.avatar?.alt || "Profile Avatar"} className="imgProfile2" />
            </div>
            <Card.Header className='bodyCardBorder'>
                <Card.Title className="nameCardProfile">{userData.name}</Card.Title>
            </Card.Header>
            <ListGroup className="list-group-flush bodyCardBorder">
                <ListGroup.Item>
                    <div><div className="profileInfo">Contact:</div>{userData.email}</div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div><div className="profileInfo">About:</div>{userData.bio}</div>
                </ListGroup.Item>
                {isOwnerView && (
                    <>
                        <ListGroup.Item><div><div className="profileInfo">Your bookings:</div></div>
                            <div><div className="profileInfo">Coming:</div></div>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                            <div><div className="profileInfo">Your Properties:</div></div>
                            <Button variant="outline-success" onClick={handleShowModalNewVenue}>Add new</Button>
                            <NewVenueModal
                                show={showModalNewVenue}
                                onHide={handleCloseModalNewVenue}
                            />
                        </ListGroup.Item>
                    </>
                )}
            </ListGroup>
            {isOwnerView && (
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
            )}
        </Card>
    );
}
export default ProfileCard;