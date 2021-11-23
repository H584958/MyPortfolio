import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "Java", ratingPercentage: 92 },
    { skill: "Pyhon", ratingPercentage: 89 },
    { skill: "Haskell", ratingPercentage: 80 },
    { skill: "JavaScript", ratingPercentage: 70 },
    { skill: "React JS", ratingPercentage: 68 },
    { skill: "HTML", ratingPercentage: 70 },
    { skill: "CSS", ratingPercentage: 65 },
    { skill: "Bash", ratingPercentage: 35 },
    { skill: "Assembly", ratingPercentage: 25 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
      title: "GCC Bachelor EXPO 2021",
      duration: { fromDate: "2021", toDate: "2021" },
      description: "A votingbased system with qr-codes for our bachelor expo.",
      subHeading: "Technologies Used: SpringBoot, Java, CSS, JS, HTML",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Western University of Applied Science, Bergen, Norway"}
        subHeading={"BACHELOR OF COMPUTER SCIENCE"}
        fromDate={"2019"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"Roald Amundsen VGS, Viken, Norway"}
        subHeading={"Studiespesialisering"}
        fromDate={"2014"}
        toDate={"2017"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"HVL"}
          subHeading={"TEACHERASSISSTANT"}
          fromDate={"2020"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as TA.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Assist the lecturer with the correction of assignments and help
            students find good solutions to assignments.
          </span>
        </div>
      </div>
    </div>,
  ];

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
      </div>
    </div>
  );
}
