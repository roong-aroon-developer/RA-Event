import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextContainer from "./TextContainer"

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        width: "100%",
    },
    textstyles: {
        color: "black",
        fontSize: 32,
        zIndex: 999,
    }
}));

export default function UnavailablePage(){
    const classes = useStyles();
    return(
        <Fragment>
             <TextContainer/>
        </Fragment>
    );
}