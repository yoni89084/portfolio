import React from "react";
import ContactItem from "../components/ContactItem";
import email from "../images/emailme.svg";
import location from "../images/location.svg";
import Phone from "../images/phone.svg";
import Title from "../components/Title";
import port4 from "../images/react.jpg";

import {
  FaLinkedin,
  FaTelegram,
  FaGithubSquare,
  FaSkype,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <div>
      <div className="title">
        <Title title={"Contact"} span={"Contat"} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <img src={port4} alt="" width="400" height="100%" />
        </div>
        <div className="contact-sect">
          <ContactItem
            icon={email}
            text={"yoniad83@gmail.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text={"North Las Vegas, Nevada"}
            title={"Location"}
          />
          <ContactItem
            icon={Phone}
            text={"+1 (702) 983-1357"}
            title={"Phone"}
          />
        </div>
      </div>
      <Title title={"My socials"} span={"Socials"} />
      <div className="icons">
        <li className="tooltip">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/yoni-ad-70b087255/"
          >
            <FaLinkedin size={42} />
          </a>
          <span className="tooltiptext">Linkedin</span>
        </li>
        <li className="tooltip">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://t.me/incredible_developer"
          >
            <FaTelegram size={42} />
          </a>
          <span className="tooltiptext">Telegram</span>
        </li>
        <li className="tooltip">
          <a
            target="_blank"
            rel="noreferrer"
            href="skype:live:.cid.ac2f2fa949fbe696?call"
          >
            <FaSkype size={42} />
          </a>
          <span className="tooltiptext">Skype</span>
        </li>
      </div>
    </div>
  );
};

export default ContactPage;
