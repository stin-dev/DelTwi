import React from 'react';
import { makeStyles, Theme, createStyles, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      width: "100vw",
      backgroundColor: theme.palette.background.paper,
      position: "relative",
    },
    circularProgress: {
      position: "absolute",
      margin: "auto",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  }))

export const ProgressFullScreen: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress
        className={classes.circularProgress}
        size={80} />
    </div>
  );
}