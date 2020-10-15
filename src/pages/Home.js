import React, { Fragment } from "react";
import EventFeed from "../components/EventFeed";
import GreetUser from "../components/GreetUser";

import '../styles/Home.css';

const Home = () => {
  return (
      <div id = "App">
        <GreetUser />
        <EventFeed />
      </div>
  )
}

export default Home;
