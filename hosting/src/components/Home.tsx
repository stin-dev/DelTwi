import React from "react";
import { Container as div, makeStyles, Theme, createStyles, Fab, Typography, Button } from '@material-ui/core';
import { Twitter } from "@material-ui/icons";
import { Subscribe } from 'unstated';
import { signIn, SignInContainer, home, HomeContainer } from "../state";
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

export const Home: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Subscribe to={[home]}>
      {(container: HomeContainer) => (
        <div>
          <h1>Home page.</h1>
        </div>
      )}
    </Subscribe>
  )
}