import React, { Fragment } from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root:{
        display: "flex",
        marginTop: 20,
        height: '24vh',
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#999999',
        overflow:'hidden',
        boxShadow: '2px 2px 6px #a6a6af',
    },
    textbox: {
        width: "55%",
        height: 18,
        borderRadius: 10,
    },
    textBody: {
        width: "40%",
        height: 18,
        borderRadius: 10,
    },
    details: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 20,
    },
}))
const RecentCardSkeleton = () => {
    const classes = useStyles();
    return(
        <Fragment>
            <div className={classes.root}>
                
                <div  className={classes.details}>
                    <Skeleton className={classes.textbox} />
                    <Skeleton className={classes.textBody} />
                    <Skeleton className={classes.textBody} />
                </div>
            </div>
        </Fragment>
    )
}

export default RecentCardSkeleton;