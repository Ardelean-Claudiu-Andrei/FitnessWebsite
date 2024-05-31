import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a
        href="https://www.instagram.com/andrei.ardelean10/"
        className="icon brands fa-instagram"
      >
        <FontAwesomeIcon icon={faInstagram} />
        <span className="label"></span>
      </a>
      <a
        href="https://www.facebook.com/claudiuandrei.ardelean/"
        className="icon brands fa-facebook-f"
      >
        <FontAwesomeIcon icon={faFacebookF} />
        <span className="label"></span>
      </a>
      <a
        href="https://www.linkedin.com/in/ardelean-andrei"
        className="icon brands fa-linkedin-in"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
        <span className="label"></span>
      </a>
    </div>
  );
};

export default SocialIcons;
