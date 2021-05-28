import Home from "Pages/Home";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
