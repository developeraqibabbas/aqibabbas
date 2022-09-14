import React from "react";
import "../banner.css";

const Banner = () => {
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 80 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML =
      ".typewrite > .wrap { border-right: 0.08em solid #fff; color: #fff;}";
    document.body.appendChild(css);
  };

  return (
    <div className="home-page">
      <div className="home-page-overlay">
      <div className="home-page-text">
        <h3>Hello,</h3>

        <h1 className="type-writer">
          <a
            href="/"
            className="typewrite"
            data-period="2000"
            data-type='[ "I’m Professional Web Developer", "I’m Professional Web Designer", "I’m WordPress Developer", "I’m Aqib Abbas" ]'
          >
            <span className="wrap"></span>
          </a>
        </h1>
        <h1 className="For-Mobile-Only">
          I Am Aqib Abbas
        </h1>
        <ul>
          <li className="me-4">• Developer</li>
          <li className="me-4">• Designer</li>
        </ul>
      </div>
      <div className="home-page-social-icons">
        <ul>
          <li><a href="/"><i className="fa-brands fa-instagram me-4"></i></a></li>
          <li><a href="/"><i className="fa-brands fa-whatsapp me-4"></i></a></li>
          <li><a href="/"><i className="fa-brands fa-twitter me-4"></i></a></li>
          <li><a href="/"><i className="fa-brands fa-facebook me-4"></i></a></li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Banner;
