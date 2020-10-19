import React from "react";
import EventFeed from "../components/EventFeed";
import GreetUser from "../components/GreetUser";
import WeekFeed from "../components/WeekFeed"

import '../styles/Home.css';

const Home = () => {
  return (
      <div id = "App">
        <GreetUser />
        <EventFeed />
        <WeekFeed />
      </div>
  )
}

export default Home;
