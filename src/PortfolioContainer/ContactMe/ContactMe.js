import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import './ContactMe.css' 

export default function ContactMe(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
    
        Animations.animations.fadeInScreen(props.id);
      };
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    
    return (
        <div className="contact-me-container screen-container" id={props.id || ""}>
          <div className="contact-me-content">
            <ScreenHeading title={"Contact Me"} subHeading={"Ask me anything"} />
            <div className="contact-card">
              
            </div>
          </div>
        </div>
      );
    
    
}