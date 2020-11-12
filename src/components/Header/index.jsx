import React from "react";
import Mask from "../../static/mask-01.png";
import Weather from "../../static/weather-icon.png";
import Skeleton from "@material-ui/lab/Skeleton";
import "./Header.css";

const Header = () => {
  const [pm, setPm] = React.useState(0);
  const [celcius, setCelcius] = React.useState(0);
  React.useEffect(() => {
    fetch("https://ra-dust-detect.now.sh/")
      .then((data) => data.json())
      .then((data) => {
        setPm(parseInt(data.pm25));
        setCelcius(parseInt(data.temp));
      });
  }, []);
  return (
    <div id="GreetBox">
      <div id="Welcome">Morning, Jarukit</div>
      <div id="subWelcome">Here's your event feed</div>
      <div id="Line" />
      <div id="CircleBox">
        <div id="InfoCircle">
          <div id="aqi-column">
            <img src={Mask} alt="mask" id="aqi" />
            <div id="aqi-number"> 
              {pm !== 0 ? pm.toString().concat(" aqi") : <Skeleton width={40} variant="text" />}
            </div>
          </div>
          <div id="temperature-column">
            <img src={Weather} alt="weather-cloud" id="weather" />
            <div id="temperature">
              {celcius !== 0 ? celcius.toString().concat(" °C") : <Skeleton width={40} variant="text" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
