import React from 'react';
import "./App.css";
import { Link } from "react-router-dom";

// Functional component for the homepage
function Header() {
  return (
    <div className="homepage">
<>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>NEST</title>
  <meta name="description" content="" />
  <meta name="author" content="" />
  {/* Favicons ================================================== */}
  <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
  <link rel="apple-touch-icon" href="img/apple-touch-icon.png" />
  <link
    rel="apple-touch-icon"
    sizes="72x72"
    href="img/apple-touch-icon-72x72.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="114x114"
    href="img/apple-touch-icon-114x114.png"
  />
  {/* Bootstrap */}
  <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
  <link
    rel="stylesheet"
    type="text/css"
    href="fonts/font-awesome/css/font-awesome.css"
  />
  {/* Stylesheet ================================================== */}
  <link rel="stylesheet" type="text/css" href="css/style.css" />
  <link
    rel="stylesheet"
    type="text/css"
    href="css/nivo-lightbox/nivo-lightbox.css"
  />
  <link rel="stylesheet" type="text/css" href="css/nivo-lightbox/default.css" />
  <link
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900"
    rel="stylesheet"
  />
  <header>
    <a className="navbar-brand page-scroll" href="Homepage">
            NEST
          </a>
    {/* Header Section */}
    <section className="header">
  <div className="container">
    <ul className="nav navbar-nav" style={{ display: 'flex', justifyContent: 'flex-start' }}>
      <li>
        <a href="#about" className="page-scroll">
          About
        </a>
      </li>
      <li>
        <a href="#services" className="page-scroll">
          Services
        </a>
      </li>
      <li>
        <a href="#portfolio" className="page-scroll">
          Projects
        </a>
      </li>
      <li>
        <a href="#team" className="page-scroll">
          Team
        </a>
      </li>
      <li>
        <a href="#contact" className="page-scroll">
          Contact
        </a>
      </li>
      <li>
        <a href="/register" className="page-scroll">
          Signup
        </a>
      </li>
      <li>
        <a href="login" className="page-scroll">
          Login
        </a>
      </li>
    </ul>
  </div>
</section>

  </header>
  {/* Rest of your HTML content goes here */}
  {/* Scripts and JavaScript files here */}
  {/* You can include your JavaScript files and scripts here */}
</>

    </div>
  );
}

export default Header;
