import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#F6F6F6",
        width: "100%",
        height: "100%",
        display: "flex",
        flexAlign: "center"
    },
    Container: {
        width: 440,
        height: 853,
        borderRadius: 50,
        boxShadow: "5px 5px 10px grey",
        borderStyle: "solid",
        borderColor: "#404040",
        borderWidth: "8px",

        backgroundImage: "linear-gradient(to bottom, #9fd8ef,#F6F6F6)",

        margin: "auto"
    },
    ContainerNotch: {
        width: 200,
        height: 10,
        backgroundColor: "#404040",
        borderRadius: "0px 0px 7px 7px",

        margin: "auto"
    }
}));

export default function TextContainer(){ 
    const classes = useStyles();
    return(
        <Fragment>
            <div className={classes.root}>
                <div className={classes.Container}>
                    <div className={classes.ContainerNotch}/>
                </div>
            </div>
        </Fragment>
    )
}