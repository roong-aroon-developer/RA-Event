import React, { Fragment } from "react";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./ProfilePage.css";

const useStyles = makeStyles((theme) => ({
  textField: {
    [`& fieldset`]: {
      borderRadius: 25,
    },
    width: "100%",
    marginTop: "3%",
  },
}));

const ProfilePage = (props) => {
  const classes = useStyles();
  return (
    <Fragment>
      <div id="profile-wrapper">
        <Avatar
          id="profile-img"
          alt="profile"
          src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/studio77-mckinsey-6653-pai_2_1.jpg?bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&q=65&usm=15&vib=3&w=600&s=99b44ef23a4b1adc068f123672212bd1"
        />
        <div id="field-container">
        <TextField
          className={classes.textField}
          label="Display name"
          type="text"
          variant="outlined"
        />

        <TextField
          className={classes.textField}
          label="Class"
          type="text"
          variant="outlined"
          helperText="For example, 5/1"
          id="Classroom"
        />

        <div id="btn-wrapper">
          <button className="cancel-btn">Cancel</button>
          <button className="save-btn">Save</button>
        </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfilePage;
