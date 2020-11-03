import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { recentData } from "./store/recentFeedMock";
import { weekData } from "./store/weekFeedMock";
import Navbar from "./components/Navbar"
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import EventPage from "./components/EventPage"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Profile} />
        <Route exact path="/" component={Home} />
        {EventData.map((data) => (
          <Route key={data.name} path={data.path} component={()=> <EventPage title={data.name} tags={data.tags} body={data.body}/>} />
        ))}
        {/*weekData.map((data) => (
          <Route key={data.name} path={data.path} component={Info} />
        ))*/}
      </Switch>
      <Navbar id="navbar"/>
    </BrowserRouter>
  );
};
export default App;
