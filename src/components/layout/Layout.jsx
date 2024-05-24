import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {

    return (
        <div className='site'>
            <Header />
            <main className='content'>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;