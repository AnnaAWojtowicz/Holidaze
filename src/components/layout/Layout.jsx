import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ModalMain from './Modal';

function Layout({ children }) {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    return (
        <div className='site'>
            <Header handleShow={handleShow} />
            <main className='content'>{children}</main>
            <Footer />
            <ModalMain showModal={showModal} handleClose={handleClose} />
        </div>
    );
}

export default Layout;