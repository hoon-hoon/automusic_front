import './Header.css';
import React from "react";
import { Typography } from '@mui/material';
import logo from '../asset/logo.png';

function Header() {
    return(<>
        <div id="header">
        <Typography align="left" style={{width:"100%"}}>
            <a href="/" >
              <img href="/" src={logo} style={{marginTop:"0%", height:"40px"}}></img>
            </a>
        </Typography>

        </div>
    </>)
}

export default Header;