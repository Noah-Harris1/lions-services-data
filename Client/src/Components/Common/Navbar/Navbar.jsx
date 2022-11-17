import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from "../Button/Button"
import './Navbar.scss';

export const Navbar = () => {
    return(
        <nav>
            <ul>
                <li><Link to={"/"}><Button text = "Sync Tablet"/></Link></li>
                <li><Link to={"/Admin"}><Button text = "Admin"/></Link></li>
                <li><Link to={"/Dashboards"}><Button text = "Dashboards"/></Link></li>
                <li><Link to={"/QrGenerator"}><Button text = "QR Generator"/></Link></li>


                <li><Link to={"/Inspection"}><Button text = "Inspection"/></Link></li>
                <li><Link to={"/QrScanner"}><Button text = "QR Scanner"/></Link></li>

                <li><Link to={"/Material"}><Button text = "Material"/></Link></li>
                
                <li><Link to={"/Packaging"}><Button text = "Packaging"/></Link></li>
                
                <li><Link to={"/Quality"}><Button text = "Quality Forms"/></Link></li>
            </ul>
        </nav>
    )
}
