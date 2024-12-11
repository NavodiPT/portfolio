import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="footer-text">© 2024 Tharushika Navodi. All Rights Reserved.</p>
        <div className="social-icons">
          <a
            href="http://www.linkedin.com/in/tharushika-n-859a77249"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/IT20639662"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:tharushikanavodi28@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
