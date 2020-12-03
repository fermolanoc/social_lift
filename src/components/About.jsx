import React from "react";

function About() {
  return (
    <div className="about-us">
      <div className="about-us__container">
        <div className="about-us__img">
          <picture>
            <img src="https://source.unsplash.com/random?teamwork" alt="" />
          </picture>
        </div>
        <div className="about-us__content">
          <div className="about-us__content--title">Did you know?</div>
          <div className="about-us__content--description">
            <li>
              <strong>63 percent</strong> of employees are so frustrated by the
              way their company communicates with them that they are ready to
              quit.
            </li>
            <li>
              <strong>65 percent</strong> of respondents said that HR technology
              is inadequate or only fair at achieving its overall objectives.
            </li>
            <li>
              Employees who feel their voice is heard at work are{" "}
              <strong>4.6 times</strong> more likely to feel empowered to
              perform their best work.
            </li>
          </div>
          <div>
            <p className="pain-message">
              <strong>Don't waste valuable time and resources.</strong>
            </p>
            <button className="about-us__content--button button">
              Contact us now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
