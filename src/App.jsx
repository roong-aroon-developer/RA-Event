import React, { Suspense } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { recentData } from "./store/recentFeedMock";
import { weekData } from "./store/weekFeedMock";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Mail from "./pages/Mail";
import Loader from "./components/Loader";
const EventPage = React.lazy(() => import("./components/EventPage"));

const Home = React.lazy(()=> import("./pages/Home"));

const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback = {<Loader />}>
      <Switch>
        <Route path="/login" component={Profile} />
        <Route exact path="/" component={Home} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Mail" component={Mail} />
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
