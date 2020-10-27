import React, { Fragment } from "react";
import EventFeed from "../components/EventFeed";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import WeekFeed from "../components/WeekFeed";

import "../styles/Home.css";

const Home = () => {
  return (
    <Fragment>
      <Navbar id="navbar"/>
      <div id="App">
        <Header />
        <EventFeed />
        <WeekFeed />
      </div>
    </Fragment>
  );
};

export default Home;
