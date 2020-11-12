import React, { Fragment } from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root:{
        display: "flex",
        marginTop: 20,
        height: '17vh',
        borderRadius: 10,
        backgroundColor: '#A6A6AF',
        overflow:'hidden',
        boxShadow: '2px 2px 6px #a6a6af',
    },
    cover: {
        minWidth: "35%",
        height: "100%",
    },
    textbox: {
        width: 140,
        height: 18,
        borderRadius: 10,
    },
    textBody: {
        width: 100,
        height: 18,
        borderRadius: 10,
    },
    details: {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 8,
        paddingRight: 6,
    },
}))
const WeekCardSkeleton = () => {
    const classes = useStyles();
    return(
        <Fragment>
            <div className={classes.root}>
                <div className={classes.cover}>
                <Skeleton variant="rect" width="100%" height="100%" />
                </div>
                <div className={classes.details}>
                    <Skeleton className={classes.textbox} />
                    <Skeleton className={classes.textBody} />
                    <Skeleton className={classes.textBody} />
                </div>
            </div>
        </Fragment>
    )
}

export default WeekCardSkeleton;