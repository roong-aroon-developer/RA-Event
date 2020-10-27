import React from "react";
import EventFeed from "../components/EventFeed";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import WeekFeed from "../components/WeekFeed"

import '../styles/Home.css';

const Home = () => {
  return (
    <div id = "App">
        <Header />
        <EventFeed />
        <WeekFeed />
        <Navbar />
      </div>
  )
}

export default Home;
