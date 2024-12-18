import React from "react";
import "./Hero.css";
import star1 from "./stickers/star1.svg";
import star2 from "./stickers/star2.svg";
import star3 from "./stickers/star3.svg";
import star4 from "./stickers/star4.svg";
import star5 from "./stickers/star5.svg";
import moon from "./stickers/moon.svg";
import ellipse from "./stickers/ellipse.svg";
import ellipse1 from "./stickers/ellipse1.svg";
import flower from "./stickers/flower.svg";
import Button from "../common components/Button";

const Hero = () => {
  return (
    <div className="hero-section">
      <img src={star1} className="orange-star-one" alt="sticker" />
      <img src={star1} className="orange-star-two" alt="sticker" />
      <img src={star2} className="white-star-one" alt="sticker" />
      <img src={star3} className="orange-star-three" alt="sticker" />
      <img src={moon} className="moon" alt="sticker" />
      <img src={ellipse} className="ellipse-one" alt="sticker" />
      <img src={ellipse} className="ellipse-two" alt="sticker" />
      <img src={ellipse1} className="ellipse-three" alt="sticker" />
      <img src={flower} className="flower-one" alt="sticker" />
      <img src={star2} className="white-star-two" alt="sticker" />
      <img src={star4} className="orange-star-four" alt="sticker" />
      <img src={star5} className="purple-star" alt="sticker" />
      <img src={star2} className="white-star-three" alt="sticker" />
      <h2 className="intro">Hi there! I’m Noor. </h2>
      <h2 className="description">
        Mainly an ex-software engineer turned astronomer. Also a hopeful Ph.D student. 
      </h2>
  
      <Button text="CV" link="https://drive.google.com/file/d/1WKv5-cHcyV4MizT3-MtTp19R0usmArwi/view?usp=sharing"/> 
    </div>
  );
};

export default Hero;
