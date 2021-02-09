import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextContainer from "./TextContainer"

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#F6F6F6",
    },
    text: {
        color: "#999999",
        fontSize: 32,
        textAlign: "center"
    }
}));

export default function UnavailablePage(){
    const classes = useStyles();
    return(
        <Fragment className ={classes.root}>
            <TextContainer/>
        </Fragment>
    );
}