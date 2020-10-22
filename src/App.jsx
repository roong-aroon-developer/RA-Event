import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Info from "./pages/Info";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = "/" component={ Home } />
        <Route path = "/login" component={ Login } />
        <Route path = "/test" component={ Info } />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
