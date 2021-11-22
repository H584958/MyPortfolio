import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div calssName="colz-icon">
              <a href="https://www.facebook.com/simonteodor.kobbenes/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/simon_kobbenes/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/simon-kobbenes-8881961b5/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://github.com/H584958">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Simon</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev",
                    1000,
                    "Full stack developer",
                    1000,
                    "React/React Native Dev",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knak of building applications with frontend and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a href="CV.pdf" download="SimonCV.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
