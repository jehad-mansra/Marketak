import React, { Fragment, useState } from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import { Weather } from "../Index";
import { useContext } from "react";
import { allData } from "../../context/Context";
import YouTubeVideo from "../YouTubeVideo/YouTubeVideo";


function Profile() {
  const [isSelected, setIsSelected] = useState("settings");
  const isSelectedHandler = (e) => {
    setIsSelected(e.target.id);
  };
  const { currentUser } = useContext(allData);
  return (
    <Fragment>
      <div className="profile-container">
        <div className="profile-links">
          <h2 className="dashboard-title">My Profile</h2>
          <div className="profile-links-container">
            <Link
              id="settings"
              className={
                isSelected === "settings" ? "profile-nav active" : "profile-nav"
              }
              onClick={(e) => isSelectedHandler(e)}
            >
              Account settings
            </Link>
          </div>
          <Weather />
          <YouTubeVideo videoId={"2aXHIbwHkAw"}/>
        </div>
        <div className="profile-data">
              <div className="username-container">
                UserName: {currentUser.username}
              </div>
              <div className="email-container">
                E-mail: {currentUser.email}
              </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Profile;
