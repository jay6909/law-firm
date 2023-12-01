
import React from 'react'
import Button from '../button'
import './navbar.css'
import { ReactComponent as NavLogo } from "./igstudio-logo.svg";


export default ({topAlbums}) => {
    return <div className='navbar'>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'10px'}}> <NavLogo /><div>IGSTUDIO</div></div>
        <div className='nav-links-container'>
            <div className='link'>Home</div>
            <div className='link'>Attorneys</div>
            <div className='link'>Practice Areas</div>
            <div className='link'>About Us</div>        
        </div>
        <Button>Contact Now</Button>
    </div>
}