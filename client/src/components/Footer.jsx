import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Footer = () => (
  <div>
    <footer className="footer">
      <div className="footer-content">
        <div className="footer">
          <p>&copy; {new Date().getFullYear()} Your Interior Designs</p>
          </div>  
  <div id="footer">
    <div className="container text-center">
      <div className="social">
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-google-plus" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-pinterest" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-youtube" />
            </a>
          </li>
        </ul>
      </div>
      <div>
      </div>
    </div>
  </div>
     
        <div className="footer-right">
    

          
          
          <button className="back-to-top" onClick={() => window.scrollTo(0, 0)}>
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
