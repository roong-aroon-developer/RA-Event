import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TodayIcon from "@material-ui/icons/Today";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: 20,
    height: "17vh",
    borderRadius: 10,
    boxShadow: "2px 2px 6px #a6a6af",
  },
  tag: {
    display: "inline-block",
    borderRadius: 100,
    backgroundColor: "#EBEBEB",
    marginRight: 10,
    color: "#667EEA",
    fontSize: 12,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 0.5,
    paddingBottom: 0.5,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 6,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 6,
  },
  content: {
    flex: "1 0 auto",
    padding: 0,
  },
  cover: {
    width: "37%",
    objectFit: "cover",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  heading: {
    marginTop: 15,
    color: "#646464",
    fontSize: 15,
  },
  dateText: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    marginTop: 5,
    fontSize: 13,
  },
  TodayIcon: {
    width: 12,
    height: 12,
    marginRight: 2,
  },
}));

export default function WeekCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <img
        className={classes.cover}
        src={props.src}
        alt={props.alt}
        loading="lazy"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          {props.tag.map((data) => {
            return (
              <Typography className={classes.tag} key={data}>
                {"#".concat(data)}
              </Typography>
            );
          })}
          <Typography className={classes.heading} component="h5" variant="h5">
            {props.title}
          </Typography>
          <Typography
            className={classes.dateText}
            variant="subtitle1"
            color="textSecondary"
          >
            <TodayIcon className={classes.TodayIcon} />
            {props.date}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
