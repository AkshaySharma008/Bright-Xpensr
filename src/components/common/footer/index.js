import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h4>
        Made with &#10084; by{" "}
        <a
          href="https://akshaysharma.co.in"
          className="author-name"
          target="_blank"
          rel="noreferrer"
        >
          Akshay Sharma
        </a>{" "}
        at{" "}
        <a
          href="https://www.brightmoney.co/"
          className="company-name"
          target="_blank"
          rel="noreferrer"
        >
          Bright Money Assessment
        </a>
      </h4>
    </div>
  );
};

export default Footer;
