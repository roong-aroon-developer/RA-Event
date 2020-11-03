import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import './EventImage.css'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: 100,
    },
    backCircle: {
        position: 'relative',
        top: 11,
        left: '4%',
        width: 32,
        height: 32,
        backgroundColor: '#C9C9C9BE',
        opacity: 80,
        borderRadius: 500,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backArrow: {
        width: 18,
        height: 20,
        color: 'white',
    }
});

const EventImage = (props) => {
    const classes = useStyles();
    return(
        <div className="TemplatePage" >
            <div className = 'placeholder' >
                <Link to='/'>
                    <div className={classes.backCircle}>
                        <ArrowBackIosRoundedIcon className = {classes.backArrow} />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default EventImage;