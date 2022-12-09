import React from 'react';
import ContactItem from '../components/ContactItem';
import email from '../images/emailme.svg';
import location from '../images/location.svg';
import Phone from '../images/phone.svg'
import Title from '../components/Title';
import port4 from '../images/react.jpg';

import { FaLinkedin, FaTelegram, FaGithubSquare, FaSkype } from 'react-icons/fa';

const ContactPage = () => {
    return (
        <div>
            <div className="title">
                <Title title={'Contact'} span={'Contat'} />
            </div>
            <div className='ContactPage'>
                <div className="map-sect">
                    <img src={port4} alt="" width="400" height="100%"/>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={email} text={'leonid.lewis@gmail.com'} title={'Email'} />
                    <ContactItem icon={location} text={'Kwai Chung, Hong Kong'} title={'Location'} />
                    <ContactItem icon={Phone} text={'+1 (415) 691 8335'} title={'Phone'} />
                </div>
            </div>
            <Title title={'My socials'} span={'Socials'} />
            <div className="icons">
                <li className='tooltip'>
                    <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/leonid-l-8b985721b/">
                        <FaLinkedin size={42} />
                    </a>
                    <span className="tooltiptext">Linkedin</span>
                </li>
                <li className='tooltip'>
                    <a target="_blank" rel='noreferrer' href="https://t.me/incredible_developer">
                        <FaTelegram size={42} />
                    </a>
                    <span className="tooltiptext">Telegram</span>
                </li>
                <li className='tooltip'>
                    <a target="_blank" rel='noreferrer' href="https://github.com/leonidlewis">
                        <FaGithubSquare size={42} />
                    </a>
                    <span className="tooltiptext">Github</span>
                </li>
                <li className='tooltip'>
                    <a target="_blank" rel='noreferrer' href="skype:live:.cid.b2006cae246c9bdf?call">
                        <FaSkype size={42} />
                    </a>
                    <span className="tooltiptext">Skype</span>
                </li>
            </div>
        </div>
    );
};

export default ContactPage;
