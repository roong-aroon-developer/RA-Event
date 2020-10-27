import React from 'react'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';

import './Navbar.css'

const Navbar = () => {
    return(
        <div id="nav-wrapper">
            <div id="icons-wrapper">
                <HomeRoundedIcon/>
                <MailOutlineRoundedIcon/>
                <AccountCircleRoundedIcon/>
            </div>

        </div>
    )
}

export default Navbar