import React from "react";
import "./Footer.scss";
import AgentAvatar from "./assets/agent_avatar.svg";

const Footer = (): JSX.Element => {
  return (
    <div className="footer_container">
      <div className="footer_container__social">
        <div className="footer_container__social__between_txt">Facebook</div>
        <div className="footer_container__social__between_txt">Instagram</div>
        <div>Twitter</div>
      </div>
      <div className="footer_container__agent">
        <img src={AgentAvatar} alt="footer_agent" className="footer_container__agent__avatar" />
        <div>
          <div>Have any questions?</div>
          <div className="footer_container__agent__talk_with_specialist">Talk to a specialist</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
