import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { recentData } from "./store/recentFeedMock";
import { weekData } from "./store/weekFeedMock";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
const  Home = lazy(() => import("./pages/Home"));
const EventPage = lazy(() => import("./components/EventPage"));

const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/login" component={Profile} />
        <Route exact path="/" component={Home} />
        <Route path="/Profile" component={Profile} />
        {recentData.map((data) => (
          <Route
            key={data.name}
            path={data.path}
            component={() => (
              <EventPage
                title={data.name}
                tag={data.tag}
                body={data.body}
                src={data.img}
                alt={data.imgAlt}
              />
            )}
          />
        ))}
        {weekData.map((data) => (
          <Route
            key={data.name}
            path={data.path}
            component={() => (
              <EventPage
                title={data.name}
                tag={data.tag}
                body={data.body}
                src={data.img}
                alt={data.imgAlt}
              />
            )}
          />
        ))}
      </Switch>
      </Suspense>
      <Navbar id="navbar" />
      
    </BrowserRouter>
  );
};
export default App;
