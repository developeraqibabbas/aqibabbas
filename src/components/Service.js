import React from 'react'
import "../service.css";

const Service = () => {
  return (
    <div className='Main-Service-Page container-fluid' id="services">
      <div className="container">
        <div className="heading-section">
            <h1>My Services</h1>
        </div>
        <div className="row ms-auto me-auto service-cards">
            <div className="devlopment-service ms-auto col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
            <i class="fa-solid fa-code"></i>
            <h5>Web Development</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quaerat rerum perferendis laborum delectus? Nam!</p>
            </div>
            <div className="designing-service col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
            <i class="fa-solid fa-palette"></i>
            <h5>Web Designing</h5>
            <p>Designing is one of the most important factor of your website. I can design good looking websites that can attract clients. </p>
            </div>
            <div className="react-service col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
            <i class="fa-brands fa-react"></i>
            <h5>React Development</h5>
            <p>React is one of the most demanding single page scripting language. I can develop modern responsive single page applications by using ReactJs.  </p>
            </div>
            <div className="wordpress-service me-auto col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
            <i class="fa-brands fa-wordpress"></i>
            <h5>Wordpress</h5>
            <p>I can develop modern responsive Wordpress websites. Every website I design on Wordpress uses the most up-to-date web standards and technology.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Service