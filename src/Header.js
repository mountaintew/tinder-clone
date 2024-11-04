import React from 'react';
import './Header.css';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import { IconButton } from '@material-ui/core';
function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonRoundedIcon fontSize="large" className="header-icon" />
            </IconButton>
            <img alt="Tinder Logo" src="icon.png" className="headerLogo" />
            <IconButton>
                <ForumRoundedIcon fontSize="large" className="header-icon" />
            </IconButton>
        </div>
    )
}

export default Header;
