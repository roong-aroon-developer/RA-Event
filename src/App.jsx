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
        {recentData.map((data) => (
          <Route key={data.name} path={data.path} component={()=> <EventPage title={data.name} tag={data.tag} body={data.body} src={data.img} alt={data.imgAlt}/>} />
        ))}
        {weekData.map((data) => (
          <Route key={data.name} path={data.path} component={()=> <EventPage title={data.name} tag={data.tag} body={data.body} src={data.img} alt={data.imgAlt}/>} />
        ))}
      </Switch>
      <Navbar id="navbar"/>
    </BrowserRouter>
  );
};
export default App;
