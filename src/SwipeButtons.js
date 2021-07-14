import React from 'react'
import './SwipeButtons.css'
import ReplayRoundedIcon from '@material-ui/icons/ReplayRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import FlashOnRoundedIcon from '@material-ui/icons/FlashOnRounded';
import { IconButton } from '@material-ui/core';
function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat">
                <ReplayRoundedIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__left">
                <CloseRoundedIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__start">
                <StarRateRoundedIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__right">
                <FavoriteRoundedIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__lightning">
                <FlashOnRoundedIcon fontSize="large"/>
            </IconButton>
            

        </div>
    )
}

export default SwipeButtons
