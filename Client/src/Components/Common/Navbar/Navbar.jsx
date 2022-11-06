import React from 'react';
import './Navbar.scss';

export const Navbar = () => {
    return(
        <div>
            <ul>
                <li><Link to={"/"}><Button text = "Home"/></Link></li>
                <li><Link to={"/Dashboards"}><Button text = "Dashboards"/></Link></li>
                <li><Link to={"/QrReader"}><Button text = "QR Scanner"/></Link></li>
                <li><Link to={"/QrGenerator"}><Button text = "QR Generator"/></Link></li>
                <li><Link to={"/Quality"}><Button text = "Quality Forms"/></Link></li>
            </ul>
        </div>
    )
}