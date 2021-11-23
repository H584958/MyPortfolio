import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
    let fadeInScreenHandeler = (screen) => {
        if(screen.fadeInScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandeler)

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent"></div>
      <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'}/>
    </div>
  );
}
