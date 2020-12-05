import React from "react";
import Mask from "../../static/mask-01.png";
import Weather from "../../static/weather-icon.png";
import Skeleton from "@material-ui/lab/Skeleton";
import "./Header.css";
import { AuthContext } from "../../store/AuthContext";

const Header = () => {
  const [pm, setPm] = React.useState(0);
  const [celcius, setCelcius] = React.useState(0);
  const { userInfo } = React.useContext(AuthContext)
  const [displayName, setDisplayName] = React.useState("")
  React.useEffect(() => {
    fetch("https://ra-dust-detect.now.sh/")
      .then((data) => data.json())
      .then((data) => {
        setPm(parseInt(data.pm25));
        setCelcius(parseInt(data.temp));
      });
    setDisplayName(userInfo.name.split(" ")[0].charAt(0).toUpperCase() +
    userInfo.name.split(" ")[0].toLowerCase().slice(1))

  }, [userInfo.name]);
  return (
    <div id="GreetBox">
      <div id="Welcome">Morning, {localStorage.getItem("dname") != null ? localStorage.getItem("dname") : displayName}</div>
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
