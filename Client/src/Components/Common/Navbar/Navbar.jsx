import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from "../Button/Button"
import './Navbar.scss';

export const Navbar = () => {
    return(
        <nav>
            <ul>
                <li><Link to={"/"}><Button text = "Home"/></Link></li>
                <li><Link to={"/Dashboards"}><Button text = "Dashboards"/></Link></li>
                <li><Link to={"/QrScanner"}><Button text = "QR Scanner"/></Link></li>
                <li><Link to={"/QrGenerator"}><Button text = "QR Generator"/></Link></li>
                <li><Link to={"/Quality"}><Button text = "Quality Forms"/></Link></li>
            </ul>
        </nav>
    )
}