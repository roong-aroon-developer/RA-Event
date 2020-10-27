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
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: "100%",
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="https://dummyimage.com/340x180"
        title="Live from space album cover"
      />
    </Card>
  );
}
