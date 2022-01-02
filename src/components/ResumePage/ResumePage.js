import React from "react";
import "./ResumePage.css";
import data from "../../data.json";
import javascript from "../../images/tech/javascript.svg";
import git from "../../images/tech/git.svg";
import react from "../../images/tech/react.svg";
import nodejs from "../../images/tech/nodejs.svg";
import html5 from "../../images/tech/html5.svg";
import css3 from "../../images/tech/css3.svg";

import typeScript from "../../images/tech/typeScript.svg";
import tail from "../../images/tech/tailwind.svg";
import boot from "../../images/tech/boot.svg";
import github from "../../images/tech/github.svg";
import php from "../../images/tech/phpnew.svg";
import sass from "../../images/tech/sass.svg";
import redux from "../../images/tech/redux.svg";
import fire from "../../images/tech/fire.svg";

const ResumePage = () => {
  return (
    <section className="resume-page">
      <header className="resume-page__header">
        <h1 className="resume-page__heading resume-page__heading--main">
          Resume
        </h1>
        <p className="resume-page__subheading">
          Learn more about my skills, qualifications and experiences.
        </p>
      </header>
      <div className="resume-page__content">
        <div className="resume-page__content-left">
          <h2 className="resume-page__heading">Tech Stack</h2>
          <p className="resume-page__subheading--body">TOOLS & TECHNOLOGIES</p>
        </div>
        <div className="resume-page__content-right">
          <div className="tech">
            <img src={html5} alt="HTML5" title="HTML5" className="tech__logo" />
            <img src={css3} alt="css" title="Css3" className="tech__logo" />
            <img
              src={javascript}
              alt="Javascript"
              title="Javascript"
              className="tech__logo"
            />
            <img
              src={typeScript}
              alt="Javascript"
              title="Javascript"
              className="tech__logo"
            />
            <img
              src={react}
              alt="React JS"
              title="React JS"
              className="tech__logo"
            />
            <img src={redux} alt="redux" title="redux" className="tech__logo" />
            <img src={sass} alt="sass" title="Sass" className="tech__logo" />

            <img
              src={tail}
              alt="tailwind"
              title="Tailwind"
              className="tech__logo"
            />

            <img
              src={fire}
              alt="fire"
              title="Firebase"
              className="tech__logo"
            />

            <img
              src={nodejs}
              alt="NodeJS"
              title="NodeJS"
              className="tech__logo"
            />

            <img src={php} alt="php" title="PHP" className="tech__logo" />
            <img
              src={boot}
              alt="Bootstrap"
              title="BOOTSTRAP"
              className="tech__logo"
            />
            <img src={git} alt="git" title="GIT" className="tech__logo" />
            <img
              src={github}
              alt="Github"
              title="Github"
              className="tech__logo"
            />
          </div>
        </div>
      </div>

      <div className="resume-page__body">
        <div className="resume-page__content">
          <div className="resume-page__content-left">
            <h2 className="resume-page__heading">Experience</h2>
            <p className="resume-page__subheading--body">
              PRESENT & PREVIOUS JOBS
            </p>
          </div>
          <div className="resume-page__content-right">
            <div className="work-wrapper">
              {data.work.map((work, i) => (
                <div className="work" key={i}>
                  <p className="work__timeline">
                    {work.timeline.from} - {work.timeline.to}
                  </p>
                  <h3 className="work__role">{work.role}</h3>
                  <p className="work__company">{work.company}</p>
                  <p className="work__summary">{work.summary} </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="resume-page__content">
          <div className="resume-page__content-left">
            <h2 className="resume-page__heading">Education</h2>
            <p className="resume-page__subheading--body">ACADEMIC CAREER</p>
          </div>
          <div className="resume-page__content-right">
            <div className="education-wrapper">
              {data.education.map((edu, i) => (
                <div className="education" key={i}>
                  <h3 className="education__degree">{edu.degree}</h3>
                  <p className="education__school">{edu.school}</p>
                  <p className="education__timeline">
                    {edu.timeline.from} - {edu.timeline.to}
                  </p>
                  <p className="education__summary">{edu.summary} </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumePage;
