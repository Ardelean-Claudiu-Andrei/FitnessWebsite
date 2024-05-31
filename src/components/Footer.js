import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-contact">
            <h3>Contact Information</h3>
            <p>
              <i className="fas fa-mobile-alt"></i> +40 741 348 864
            </p>
            <p>
              <i className="far fa-envelope"></i> aclaudiuandrei586@gmail.com
            </p>
          </div>
          {/* You can add additional content to your footer if needed */}
          <div className="footer-links">
            {/* Add links to other pages or resources */}
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Andrei Ardelean. All Rights
            Reserved.
          </p>
          <p>{/* <a href="/privacy">Privacy Policy</a> */}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
