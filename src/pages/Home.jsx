import React, { Fragment } from "react";
import RecentFeed from "../components/RecentFeed";
import Header from "../components/Header";
import WeekFeed from "../components/WeekFeed";

import "../styles/Home.css";

const Home = () => {
  return (
    <Fragment>
      <div id="App">
        <Header />
        <RecentFeed />
        <WeekFeed />
      </div>
    </Fragment>
  );
};

export default Home;
