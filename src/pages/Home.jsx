import React from "react";
import EventFeed from "../components/EventFeed";
import Header from "../components/Header";
import WeekFeed from "../components/WeekFeed"

import '../styles/Home.css';

const Home = () => {
  return (
    <div id = "App">
        <Header />
        <EventFeed />
        <WeekFeed />
      </div>
  )
}

export default Home;
