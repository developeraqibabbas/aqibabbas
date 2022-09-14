import React from 'react'
import "../contact.css";

const Contact = () => {
  return (
    <div className='Main-Contact'>
      <div className="container">
        <div className="contact-info">
            <div className="row justify-content-center icons-detail">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <i class="fa-solid fa-phone"></i>
                    <h4>
                        +921234567890
                        <br />
                        +923243523412
                    </h4>
                </div>
                <div className="margin-for-mobile-display col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 edit-second">
                <i class="fa-solid fa-location-dot">
                </i>
                    <h4>Street Number #1, <br /> Karachi</h4>
                </div>
                <div className="margin-for-mobile-display col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <i class="fa-solid fa-envelope"></i>
                <h4>
                    myemailadress@gmail.com
                    <br />
                    secondeladress@gmail.com
                </h4>
                </div>
            </div>
            <div className="row">
                <form action="">
                    <div className="row">
                  <div className="inputs col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                    <input type="text" className='contact-form-input' placeholder='Your Name' />
                    <input type="text" className='contact-form-input' placeholder='Your Email' />
                    <input type="text" className='contact-form-input' placeholder='Your Budget' />
                  </div>
                  <div className="text-area col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                    <textarea name="" id="" rows="6" placeholder='Project Detail'></textarea>
                    <div className="button-message">
                    <a href="/" className='btn btn-outline-light'>Send Message</a>
                    </div>
                  </div>
                  </div>

                </form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contact