import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={ Login } />
        <Route path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
