import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: 20,
    marginBottom: 20,
    height: 180,
    borderRadius: 10,
  },
  cover: {
    width: "100%",
    filter: "brightness(55%)",
  },
  overlay: {
    position: "absolute",
    top: "15%",
    right: "7%",
    color: "white",
    textAlign: "right",
    maxWidth: "75%",
    fontSize: "16pt",
    fontFamily: "IBM Plex Sans Thai",
  },
}));

export default function RecentCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <img
        className={classes.cover}
        src={props.src}
        alt={props.alt}
        loading="lazy"
      />
      <div className={classes.overlay}>{props.title}</div>
    </Card>
  );
}
