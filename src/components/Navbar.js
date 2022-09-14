import React from 'react'
import '../nav-bar.css';

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container">
    <a className="navbar-brand navbar-heading-style" href="/">Aqib Abbas</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav navbar-link-style ms-auto ml-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <a className="nav-link ms-3 me-3" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link ms-2 me-2" href="/">About</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link ms-3 me-3" href="/">Services</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link ms-3 me-3" aria-current="page" href="/">Portfolio</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link ms-3 me-3" href="/">Resume</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link ms-3 me-3" href="/">Blog</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link ms-3 me-3" href="/">Contact</a>
        </li>

        </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar