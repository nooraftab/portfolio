import React, { useState, useEffect } from "react";
import "./Footer.css";
import star from "../work/stickers/export-star.svg";
import Button from "./Button";
import gmail from "../work/stickers/gmail.svg";
import linkedin from "../work/stickers/linkedin.svg";
import twitter from "../work/stickers/twitter.svg";
import github from "../work/stickers/github.svg";
import insta from "../work/stickers/instagram.svg";

const Footer = () => {
  const [leftPos, setLeftPos] = useState(-2100);
  const [numberOfStars, setNumberOfStars] = useState(0);
  const starWidth = 30; // Adjust this to the actual width of your star image in pixels

  useEffect(() => {
    const handleScroll = () => {
      const pos = window.scrollY - 2100;
      setLeftPos(pos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateStars = () => {
      const width = window.innerWidth; // Get the current browser width
      const starsToShow = Math.floor(width / starWidth); // Calculate how many stars fit
      setNumberOfStars(starsToShow); // Update state
    };

    updateStars();
    window.addEventListener("resize", updateStars);

    return () => {
      window.removeEventListener("resize", updateStars);
    };
  }, []);

  return (
    <>
      <div className="hire-me-scroll">
        <h5 className="hire-me" style={{ left: `${leftPos}px` }}>
          {Array.from({ length: numberOfStars }, (_, index) => (
            <img key={index} src={star} alt="hire me" className="hire-me-star" />
          ))}
        </h5>
      </div>

      <div className="contact-section">
        <h6 className="contact-line">I'm findable!</h6>
        <div className="contact-one">
          <div className="social-links">
            <a href="mailto:nooraftab42@gmail.com">
              <img src={gmail} alt="gmail" className="icon-link" />
            </a>
            <a
              href="https://www.linkedin.com/in/nooraftab42"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin" className="icon-link" />
            </a>
            <a
              href="https://github.com/nooraftab"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github" className="icon-link" />
            </a>
          </div>
        </div>
      </div>

      <div className="last-line">
        <p id="last-line">
          Credit to <a href="https://github.com/paribhandarkar/portfolio">Pari Bhandarkar</a>  for the super cute website template! 
        </p>
      </div>
    </>
  );
};

export default Footer;
