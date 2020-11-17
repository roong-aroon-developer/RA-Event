import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        marginTop: 10,
        height: '10vh',
        borderRadius: 15,
        boxShadow: '2px 2px 5px lightgray',
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