import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footerPositioning">
            <div >Copyright Holidaze {year}</div>
        </footer>
    );
}

export default Footer;