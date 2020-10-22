import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import { EventData } from "./store/EventFeedMock";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Info from "./pages/Info";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        {EventData.map((data) => (
          <Route key={data.name} path={data.path} component={Info} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};
export default App;
