import React from "react";
import { Container as div, makeStyles, Theme, createStyles, Fab, Typography } from '@material-ui/core';
import { Twitter } from "@material-ui/icons";
import { Subscribe } from 'unstated';
import { signIn, SignInContainer } from "../state";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
      minHeight: "100vh",
      backgroundColor: theme.palette.primary.main,
    },
    descriptions: {
      paddingTop: 80,
    },
    description: {
      marginBottom: 30,
      fontSize: 50,
      color: theme.palette.primary.contrastText,
      fontWeight: "bold",
      [theme.breakpoints.down("xs")]: {
        fontSize: 40,
      },
    },
    descriptionEmphasis: {
      color: theme.palette.secondary.light,
      fontWeight: "bolder",
    },
    fabSpace: {
      textAlign: "center",
      position: "fixed",
      bottom: theme.spacing(6),
      width: "100vw",
    },
    fabIcon: {
      marginRight: theme.spacing(1),
    }
  }),
);

export const SignIn: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Subscribe to={[signIn]}>
      {(container: SignInContainer) => {
        // if already signed in.
        if (container.state.user) { history.push("/"); }
        return (
          <React.Fragment>
            <div className={classes.root}>
              <div className={classes.descriptions}>
                <Typography className={classes.description}>
                  DelTwi is
                </Typography>
                <Typography className={classes.description}>
                  an Application
                </Typography>
                <Typography className={classes.description}>
                  to Delete
                </Typography>
                <Typography className={classes.description}>
                  your Tweets
                </Typography>
                <Typography className={classes.description}>
                  <span className={classes.descriptionEmphasis}>More</span> easily.
                </Typography>
              </div>
            </div>
            <div className={classes.fabSpace}>
              <Fab
                variant="extended"
                size="large"
                color="secondary"
                aria-label="sign in"
                onClick={container.signIn}>
                <Twitter className={classes.fabIcon} />
                sign in
            </Fab>
            </div>
          </React.Fragment>
        )
      }}
    </Subscribe>
  )
}