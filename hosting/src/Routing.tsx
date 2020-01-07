import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "unstated";
import App from "./App";
import { SignIn } from "./components/SignIn";
import { ProgressFullScreen } from "./components/ProgressFullScreen";
import { Home } from "./components/Home";
import { Favorites } from "./components/Favorites";
import { Following } from "./components/Following";

const Routing: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider>
        <Switch>
          <Route exact path="/sign-in">
            <SignIn />
          </Route>
          <Route exact path="/loading">
            <ProgressFullScreen />
          </Route>
          <Route exact path="/favorites">
            {App(<Favorites />, "Favorites")}
          </Route>
          <Route exact path="/following">
            {App(<Following />, "Following")}
          </Route>
          <Route exact path="/">
            {App(<Home />, "Home")}
          </Route>
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default Routing;