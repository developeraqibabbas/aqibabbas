import React from "react";
import "../about.css";
import image from "../images/phil-desforges-6GvSbhl-XTU-unsplash.jpg";

const About = () => {
  return (
    <>
      {" "}
      <div className="Main-Page" id="about">
      <div className="container Main-About-Page">
        <div className="picture col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
          <img src={image} alt="" />
        </div>
        <div className="about-me col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <h1>About Me</h1>
          <p>
            I'm Aqib Abbas web developer. I spend my whole day, practically everyday experimenting with HTML, CSS and JAVASCRIPT; I enjoy work that challenges me to learn something new and stretch in different direction. I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand. I build websites that delight and inform. I do it well.
          </p>
          <p>
          At the moment, I’m working on projects that lead me to learn something new. I’ve focused my energies on the web, which happily has proven itself to be a wonderful decision. A more complete resume is available at resume page.
          </p>
          <span className="hover-button">
            <button className="btn btn-outline-light">Hire Me</button>
          </span>
          <button className="btn btn-outline-light">Download CV</button>
        </div>
      </div>
      </div>
      <div className="my-skills">
        <div className="container">
        <h1>My Skills</h1>
        <div className="row">
          <div className="col-sm-6">
            <div className="flex-h6 d-flex justify-content-between">
              <h6>Web Development</h6>
              <h6>95%</h6>
            </div>
            <div class="progress">
              <div
                class="progress-bar width-adjustment-progress-bar-success"
                role="progressbar"
                aria-label="Success example"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="flex-h6 d-flex justify-content-between">
              <h6>Web Designing</h6>
              <h6>90%</h6>
            </div>
            <div class="progress">
              <div
                class="progress-bar width-adjustment-progress-bar-info"
                role="progressbar"
                aria-label="Info example"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="flex-h6 d-flex justify-content-between">
              <h6 className="">React JS Development</h6>
              <h6>75%</h6>
            </div>
            <div class="progress">
              <div
                class="progress-bar width-adjustment-progress-bar-waning"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="flex-h6 d-flex justify-content-between">
              <h6 className="">WordPress</h6>
              <h6 className="">80%</h6>
            </div>
            <div class="progress">
              <div
                class="progress-bar width-adjustment-progress-bar-danger"
                role="progressbar"
                aria-label="Danger example"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default About;
