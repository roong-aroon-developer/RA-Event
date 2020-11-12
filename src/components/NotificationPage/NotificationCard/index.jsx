import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        marginTop: 20,
        height: '12vh',
        borderRadius: 20,
    },
}))

const NotificationCard = () => {
    const classes = useStyles();
    return(
        <Fragment>
            <Card className={classes.root}>

            </Card>
        </Fragment>
    )
}

export default NotificationCard;