import React from "react";
import "./Footer.css"; // -- remove this line if you’ll style globally

import {
  logoInstagram,
  logoLinkedin,
  logoFacebook,
  logoYoutube,
  logoWhatsapp,
  logoTwitter,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";

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
        </div>
        <div className="footer_right">
          <h1> Our Location</h1>
          <h3> Ar Rabi District,13325 Riyadh Saudi Arabia</h3>
        </div>
        <div className="footer_left2">
          <a href="/"> Home </a>
          <a href="/about"> About </a>
          <a href="/projects"> Projects </a>
          <a href="/gallery"> Gallery </a>
          <a href="/contact"> Contact </a>
        </div>
      </div>
      <div className="footerdown">
        <div className="footerdown_left"></div>
        <div className="footerdown_right">
          <a
            href="https://www.instagram.com/contrateksa/"
            target="_blank"
            rel="noreferrer"
          >
            <IonIcon icon={logoInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/company/contrateksa/"
            target="_blank"
            rel="noreferrer"
          >
            <IonIcon icon={logoLinkedin} />
          </a>
          <a
            href="https://www.facebook.com/contrateksa/"
            target="_blank"
            rel="noreferrer"
          >
            <IonIcon icon={logoFacebook} />
          </a>
          <a
            href="https://www.youtube.com/@contrateksa"
            target="_blank"
            rel="noreferrer"
          >
            <IonIcon icon={logoYoutube} />
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
