import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "./images/logo_transparente.png";
import { Icon } from "semantic-ui-react";

function Footer() {
  return (
    <div className="footer-web">
      <div className="footer-contanier-web">
        <img src={logo} className="img-footer-web" alt="logo" />
        <div className="footer-section-web sec-1-web">
          <div className="footer-flex-web">
            <i class="fa fa-map-marker fa-lg" aria-hidden="true"></i>
            <p>
              Adquiri nuestros servicios gratuitos para tu empresa, comercio o
              proyectos personales.
            </p>
          </div>
        </div>
        <div className="footer-section-web sec-2-web">
          <div className="footer-flex-web">
            <i class="fa fa-phone fa-lg" aria-hidden="true"></i>
            <p>digitalcodeoficial@gmail.com</p>
          </div>
          <div className="footer-flex-web">
            <i class="fa fa-envelope fa-lg" aria-hidden="true"></i>
            <p>Lunes a Sabados de 08:00 Am - 20:00 Pm </p>
          </div>
        </div>
        <div className="footer-section-web sec-5-web">
          <div className="footer-flex-web mobile-center-web">
            <Icon name="facebook" size="large" />
            <Icon name="twitter" size="large" />
            <Icon name="instagram" size="large" />
          </div>
        </div>
      </div>

    </div>
  );
}
export default Footer;
