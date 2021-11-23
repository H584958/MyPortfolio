import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandeler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandeler);

  const SCREEN_CONSTANTS = {
    description:
      "I am a full time student studying computer engineering at the Western University of Applied Science. Over the years I have gained good knowledge of Java, React, CSS, JS and Python where I work very efficiently. I am a professional and ready to get to work.",
    highlights: {
      bullets: [
        "React portfolio",
        "GCC Expo2021",
        "Machine Learning",
        "Starting bachelor",
      ],
      heading: "Projects:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent"></div>
      <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
      <div className="about-me-card">
        <div className="about-me-profile"></div>
        <div className="about-me-details">
          <span className="about-me-description">
            {SCREEN_CONSTANTS.description}
          </span>
          <div className="about-me-highlights">
            <div className="highlight-heading">
              <span>{SCREEN_CONSTANTS.highlights.heading}</span>
            </div>
            {renderHighlight()}
          </div>
          <div className="about-me-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a href="CV.pdf" download="SimonCV.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
