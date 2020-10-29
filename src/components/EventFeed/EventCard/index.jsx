import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: 20,
    marginBottom: 20,
    height: 180,
    borderRadius: 10
  },
  cover: {
    width: "100%",
  },
  overlay: {
    position: 'absolute',
    top: '15%',
    right: '7%',
    color: 'while',
    textAlign: 'right',
    maxWidth: "80%",
    fontSize: "18pt"
  }
}));

export default function EventCard() {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="https://dummyimage.com/340x180"
        title="Live from space album cover"
      />
      <div className={classes.overlay} >วันเฉลิมพระชนมพรรษา พระบาทสมเด็จพระวชิรเกล้า เจ้าอยู่หัว</div>
    </Card>
  );
}
