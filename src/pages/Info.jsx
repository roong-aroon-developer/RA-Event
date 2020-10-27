import React from "react";
import EventImage from '../components/Info/EventImage';
import EventTag from "../components/Info/EventTag";
import EventContent from "../components/Info/EventContent";

const Info = () => {
    return(
        <div>
            <EventImage />
            <EventTag />
            <EventContent />
        </div>
    );
}

export default Info;