import React, { Fragment } from "react";
import bg from "../../static/bg.png"

export default function UnavailablePage(){
    return(
        <Fragment>
             <img src={bg} alt="bg" style={{objectFit: "cover", width: "100%"}}></img>
        </Fragment>
    );
}