import React from "react";
import "./Content.scss";
import Checkmark from "../assets/Checkmark.svg";
import HeroImage from "../assets/Hero-Image (Model).png";
import PurpleShape from "../assets/Purple-Shape.svg";
import PinkShape from "../assets/Pink-Shape.svg";
import BlueShape from "../assets/Blue-Shape.svg";

const Content = (): JSX.Element => {
  return (
    <div className="content_container">
      <div className="content_container__message">
        <div className="content_container__message__title">
          Host your website in less than 5 minutes.
        </div>
        <div className="content_container__message__detail">
          with Hosterr, get your website up and running in no less than 5 minute with the most
          competitive pricing packages available online.
        </div>
        <div className="content_container__message__email">
          <input type="email" placeholder="Enter email address" />
          <div className="content_container__message__email__join-waitlist-bt">Join Waitlish</div>
        </div>
        <div className="content_container__message__sub_detail">
          <img
            src={Checkmark}
            alt="checkmark"
            className="content_container__message__sub_detail__image"
          />
          <div className="content_container__message__sub_detail__text">
            No spam, ever. Unsubscribe anytime.
          </div>
        </div>
      </div>
      <div className="content_container__message__image">
        <img src={HeroImage} alt="hero-img" className="content_container__message__image__font" />
        <img
          src={BlueShape}
          alt="ิblue-shape"
          className="content_container__message__image__blue_shape"
        />
        <img
          src={PinkShape}
          alt="pink-shape"
          className="content_container__message__image__pink_shape"
        />
        <img
          src={PurpleShape}
          alt="purple-shape"
          className="content_container__message__image__purple_shape"
        />
      </div>
    </div>
  );
};

export default Content;
