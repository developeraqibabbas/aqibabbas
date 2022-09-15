import React from 'react'
import "../resume.css";


const Resume = () => {
  return (
    <div className='Main-Resume' id="resume">
        <div className="container">
        <div className="main-resume-heading">
            <h1>Resume</h1>
        </div>
        
        <div className="row justify-content-evenly">
            <div className='education col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                <div className="heading-icon d-flex">
                <i class="fa-solid fa-trophy"></i>
                <h2>Education:</h2>
                </div>
                <div className="single-resume">
                    <p>March 2013 - Present Deacember.</p>
                    <h4>Diploma in Information Technology</h4>
                    <div className="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do iusmodm incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <h5>Nortsouth University</h5>
                    <hr />
                </div>
                <div className="single-resume">
                <p>March 2011 - 2014 Deacember.</p>
                    <h4>Professional Web Design</h4>
                    <div className="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do iusmodm incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <h5>Florida University</h5>
                    <hr />
                </div>
                <div className="single-resume">
                <p>March 2008 - 2010 Deacember.</p>
                    <h4>Higher Secondary School Certificate</h4>
                    <div className="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do iusmodm incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <h5>University of California</h5>
                    <hr />
                </div>
            </div>
            <div className='experience col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
            <div className="heading-icon d-flex">
                <i class="fa-solid fa-briefcase"></i>
                <h2>Experience:</h2>
                </div>
                <div className="single-resume">
                    <p>March 2013 - Present Deacember.</p>
                    <h4>Diploma in Information Technology</h4>
                    <div className="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do iusmodm incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <h5>Nortsouth University</h5>
                    <hr />
                </div>
                <div className="single-resume">
                <p>March 2011 - 2014 Deacember.</p>
                    <h4>Professional Web Design</h4>
                    <div className="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do iusmodm incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <h5>Florida University</h5>
                    <hr />
                </div>
                <div className="single-resume">
                <p>March 2008 - 2010 Deacember.</p>
                    <h4>Higher Secondary School Certificate</h4>
                    <div className="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do iusmodm incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <h5>University of California</h5>
                    <hr />
                    </div>
                    </div>
        </div>
        </div>
    </div>
  )
}

export default Resume