import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  let render = () => {
    return <input type="text" value="" />;
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="contact-me-container screen-container" id={props.id || ""}>
      <div className="contact-me-content">
        <ScreenHeading title={"Contact Me"} subHeading={"Ask me anything"} />
        <div className="contact-me-card">
          <div className="contact-me-heading">
            <span>Get In Touch📨</span>
            <div className="contact-me-info"></div>
            <div className="contact-me-box">
              <div className="name-text-box">
                <span>Name:</span>
                <br />
                {render()}
              </div>
              <div className="email-text-box">
                <span>Email:</span>
                <br />
                {render()}
              </div>
              <div className="message-text-box">
                <span>Message:</span>
                <br />
                {render()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
