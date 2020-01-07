import React from 'react';
import { Subscribe } from 'unstated';
import { signIn, SignInContainer } from './state';
import { Link, Redirect } from 'react-router-dom';
import { ProgressFullScreen } from './components/ProgressFullScreen';
import {
  makeStyles,
  createStyles,
  BottomNavigation,
  BottomNavigationAction,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Theme,
  Avatar,
  Button
} from '@material-ui/core';
import {
  Favorite as FavoriteIcon,
  Home as HomeIcon,
  People as PeopleIcon
} from "@material-ui/icons";

const AppMaxWidth = 900;
type TimelineType = "Home" | "Favorites" | "Following";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: {
    },
    appBarSpace: {
      position: "fixed",
      width: "100%",
      top: 0,
      left: 0,
    },
    appBar: {
      maxWidth: AppMaxWidth,
      margin: "auto",
    },
    title: {
      flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
    container: {
      width: "100%",
      maxWidth: AppMaxWidth,
      margin: "auto",
    },
    bottomNavigationSpace: {
      position: "fixed",
      width: "100%",
      bottom: 0,
      left: 0,
    },
    bottomNavigation: {
      maxWidth: AppMaxWidth,
      margin: "auto",
    },
    navigationAction: {
      maxWidth: "33.333%",
    },
  }));

const AppWrapper = (content: JSX.Element, navigation: TimelineType) => {
  const classes = useStyles();

  return (
    <Subscribe to={[signIn]}>
      {(container: SignInContainer) => {
        if (container.state.isLoading) { return <ProgressFullScreen /> }

        if (!container.state.user) {
          return <Redirect to="/sign-in" />;
        }

        return (
          <React.Fragment>
            <div className={classes.appBarSpace}>
              <AppBar className={classes.appBar} position="static">
                <Toolbar>
                  <IconButton
                    edge="start"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <Avatar alt="Avatar Icon"
                      src={container.state.user.info.photoURL ?? undefined} />
                  </IconButton>
                  <Typography variant="h6" className={classes.title}>
                    {navigation}
                  </Typography>
                  <Button color="inherit" onClick={container.signOut}>sign out</Button>
                </Toolbar>
              </AppBar>
            </div>
            <div className={classes.toolbar} />

            <Container className={classes.container}>
              {content}
            </Container>

            <div className={classes.bottomNavigationSpace}>
              <BottomNavigation
                value={navigation}
                showLabels
                className={classes.bottomNavigation}>
                <Divider />
                <BottomNavigationAction
                  className={classes.navigationAction}
                  value="Home"
                  label="Home"
                  component={Link}
                  to="/"
                  icon={<HomeIcon />} />
                <BottomNavigationAction
                  className={classes.navigationAction}
                  value="Favorites"
                  label="Favorites"
                  component={Link}
                  to="/favorites"
                  icon={<FavoriteIcon />} />
                <BottomNavigationAction
                  className={classes.navigationAction}
                  value="Following"
                  label="Following"
                  component={Link}
                  to="/following"
                  icon={<PeopleIcon />} />
              </BottomNavigation>
            </div>
          </React.Fragment>
        );
      }}
    </Subscribe>
  );
}

export default AppWrapper;
