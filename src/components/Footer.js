import React from 'react'
import "../footer.css";

const Footer = () => {
  return (
    <div className='Main-Footer'>
      <div className="container">
        <div className="home-page-social-iconss">
        <ul>
          <li><a href="/"><i className="fa-brands fa-instagram me-4"></i></a></li>
          <li><a href="/"><i className="fa-brands fa-whatsapp me-4"></i></a></li>
          <li><a href="/"><i className="fa-brands fa-twitter me-4"></i></a></li>
          <li><a href="/"><i className="fa-brands fa-facebook me-4"></i></a></li>
        </ul>
      </div>
      <div className="Footer-Copyright">
        <p>Copyright @ 2022 <span> Aqib Abbas Web </span> all right reserved, designed by <span> Aqib Abbas </span></p>
      </div>
      </div>
    </div>
  )
}

export default Footer