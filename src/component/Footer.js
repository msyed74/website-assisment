import React from "react";
import "./Footer.css"; // -- remove this line if you’ll style globally

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footerup">
        <div className="footer_left">
          <div className="footer_left1">
            <h1> Contact us</h1>
            <h3> +98677767886 , +87865765765</h3>
            <h4>info@contrateksa.com </h4>
          </div>
          <div className="footer_left2">
            <a href="/"> Home </a>
            <a href="/about"> About </a>
            <a href="/projects"> Projects </a>
            <a href="/gallery"> Gallery </a>
            <a href="/contact"> Contact </a>
          </div>
        </div>
        <div className="footer_right">
          <h1> Our Location</h1>
          <h3> Ar Rabi District,13325 Riyadh Saudi Arabia</h3>
        </div>
      </div>
      <div className="footerdown">
        <div className="footerdown_left">
          <h1> Contratek Establishment</h1>
          <h6>cr24798749827379</h6>
        </div>
        <div className="footerdown_right">
          <h1> Follow us</h1>
          <a
            href="https://www.instagram.com/contrateksa/"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a
            href="https://www.linkedin.com/company/contrateksa/"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a
            href="https://www.facebook.com/contrateksa/"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a
            href="https://www.youtube.com/@contrateksa"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
          <a
            href="https://wa.me/966538888888"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-whatsapp"></ion-icon>
          </a>
          <a
            href="https://twitter.com/contrateksa"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </div>
      </div>
      <p className="footer__text">
        © {year} • Contratek Establishment. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
