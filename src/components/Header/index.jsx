import React from "react";
import Mask from "../../static/mask-01.png";
import Weather from "../../static/weather-icon.png";
import Skeleton from "@material-ui/lab/Skeleton";
import "./Header.css";
import { AuthContext } from "../../store/AuthContext";

const Header = () => {
  const [celcius, setCelcius] = React.useState(0);
  const { userInfo } = React.useContext(AuthContext)
  const [displayName, setDisplayName] = React.useState("")
  const [pmAqi, setPmAqi] = React.useState(0);
  React.useEffect(() => {
    fetch("https://ra-dust-detect.now.sh/")
      .then((data) => data.json())
      .then((data) => {
        setCelcius(parseInt(data.temp));
        if(parseFloat(data.pm25Avg) <= 12.0){
          setPmAqi(Math.trunc(((50/12)*parseFloat(data.pm25Avg))*10)/10);
        }
        else if(parseFloat(data.pm25Avg) >= 12.1 && parseFloat(data.pm25Avg) <= 35.4){
          setPmAqi(Math.trunc((((49/23.3)*(parseFloat(data.pm25Avg)-12.1))+51)*10)/10);
        }
        else if(parseFloat(data.pm25Avg) >= 35.5 && parseFloat(data.pm25Avg) <= 55.4){
          setPmAqi(Math.trunc((((49/19.9)*(parseFloat(data.pm25Avg)-35.5))+101)*10)/10);
        } 
        else if(parseFloat(data.pm25Avg) >= 55.5 && parseFloat(data.pm25Avg) <= 150.4){
          setPmAqi(Math.trunc((((49/54.9)*(parseFloat(data.pm25Avg)-55.5))+151)*10)/10);
        }
        else if(parseFloat(data.pm25Avg) >= 150.5 && parseFloat(data.pm25Avg) <= 250.4){
          setPmAqi(Math.trunc((((99/99.9)*(parseFloat(data.pm25Avg)-150.5))+201)*10)/10);
        }
        else if(parseFloat(data.pm25Avg) >= 250.5 && parseFloat(data.pm25Avg) <= 500.4){
          setPmAqi(Math.trunc((((199/249.9)*(parseFloat(data.pm25Avg)-250.5))+301)*10)/10);
        }
      });
    

    if(userInfo.name) {
      setDisplayName(userInfo.name.split(" ")[0].charAt(0).toUpperCase() + userInfo.name.split(" ")[0].toLowerCase().slice(1))
    }
    

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
              {pmAqi !== 0 ? pmAqi.toString().concat(" aqi") : <Skeleton width={40} variant="text" />}
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
