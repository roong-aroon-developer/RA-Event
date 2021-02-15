import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#F6F6F6",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
        display: "flex",
        flexAlign: "center"
    },
    Container: {
        width: 440,
        height: 853,
        borderRadius: 50,
        boxShadow: "6px 8px 15px #3B3B3B",
        borderStyle: "solid",
        borderColor: "#404040",
        borderWidth: "8px",
        
        backgroundImage: "linear-gradient(to bottom, #9fd8ef,#F6F6F6)",

        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    ContainerNotch: {
        width: 200,
        height: 10,
        backgroundColor: "#404040",
        borderRadius: "0px 0px 7px 7px",

        margin: "auto"
    },
    text: {
        color: "#505050",
        textAlign: "center",
        fontSize: 28
    }
}));

export default function TextContainer(){ 
    const classes = useStyles();
    return(
        <Fragment>
            <div className={classes.root}>
                <div className={classes.Container}>
                    <div className={classes.text}>
                        This page is currently unavailable on this platform
                    </div>
                    <br></br>
                    <div className={classes.text}>
                        Please access page through your mobile devices
                    </div>
                </div>
            </div>
        </Fragment>
    )
}