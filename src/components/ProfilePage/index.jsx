import React, { Fragment } from "react";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { AuthContext } from "../../store/AuthContext";
import Data from "../../static/StudentList.json";
import "./ProfilePage.css";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
  },
  textField: {
    [`& fieldset`]: {
      borderRadius: 25,
    },
    width: "100%",
    marginTop: "3%",
  },
}));

const ProfilePage = (props) => {
  const { userInfo } = React.useContext(AuthContext);
  const classes = useStyles();
  const [displayName, setDisplayName] = React.useState("");
  const [profile, setProfle] = React.useState("");
  const [classroom, setClassroom] = React.useState("");

  React.useEffect(() => {
    setDisplayName(
      userInfo.name.split(" ")[0].charAt(0).toUpperCase() +
        userInfo.name.split(" ")[0].toLowerCase().slice(1)
    );
    setProfle(userInfo.img)
    if(userInfo.email) {
      setClassroom(
        Data.find(
          (el) => el.st_id === userInfo.email.split("@")[0].split("t")[1]
        ).st_room
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo.email, userInfo.name]);

  const handleChange = (e) => {
    setDisplayName(e.target.value);
  };

  return (
    <Fragment>
      <div className={classes.root}>
        <div id="profile-wrapper">
          <Avatar
            id="profile-img"
            alt="profile"
            src={profile}
          />
          <div id="field-container">
            <TextField
              className={classes.textField}
              label="Display name"
              value={displayName}
              type="text"
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              className={classes.textField}
              label="Class"
              value={classroom}
              type="text"
              variant="outlined"
              helperText="Please contact your teacher in order to change your class"
              id="Classroom"
              disabled
            />

            <div id="btn-wrapper">
              <Link to="/">
                <button className="cancel-btn">Cancel</button>
              </Link>
              <button className="save-btn">Save</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfilePage;
