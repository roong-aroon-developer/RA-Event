import React, { Suspense } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { weekData } from "./store/weekFeedMock";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import Unavailable from "./pages/Unavailable";
import { isMobile } from "react-device-detect";
const EventPage = React.lazy(() => import("./components/EventPage"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Mail = React.lazy(() => import("./pages/Mail"));

const App = () => {
  const [Data, setData] = React.useState([])
  React.useEffect(()=> {
    fetch("http://localhost:9000/events")
      .then((data) => data.json())
      .then((e) => {
        setData(e.data);
    });
  }, [])
  if (isMobile) {
    //set to isMobile on production
    return (
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/login" component={Profile} />
            <Route exact path="/" component={Home} />
            <Route path="/Profile" component={Profile} />
            <Route path="/Mail" component={Mail} />
            {Data.map((data) => (
              <Route
                key={data._id}
                path={data.path}
                component={() => (
                  <EventPage
                    title={data.name} 
                    tag={data.tags}
                    body={data.body}
                    src={data.img}
                    alt={data.imgAlt}
                  />
                )}
              />
            ))}
            {weekData.map((data) => (
              <Route
                key={data._id}
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
  } else {
    return <Unavailable />;
  }
};
export default App;
