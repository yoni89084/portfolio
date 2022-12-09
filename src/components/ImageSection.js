import React from 'react';
import fire from '../images/about.jpg';

const ImageSection = () => {
    return (
        <div className='ImageSection'>
            <div className="img">
                <img src={fire} alt="profile img" />
            </div>
            <div className="about-info">
                <p className='about-text'>
                    I am looking for a job as a front end & blockchain developer.
                    For 7 years of software developer career, I built the Business, e-commerce, shopping platform, personal blog site.
                    I approach everything Agile and with my team I refined a new SCRUM like methodology that allows us to be super-precise, delivering on time and following high standard of coding thanks to many micro iterations of 1 or 2 weeks each.
                </p>

                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                    </div>
                    <div className="right-section">
                        <p>: <span>Leonid Lewis</span></p>
                        <p>: 29</p>
                        <p>: English</p>
                        <p>: English</p>
                    </div>
                </div>
                <button className="btn">
                    <a href="https://drive.google.com/file/d/1RRubEgsZI2n_jziWvldqp-oUO5zIagBR/view?usp=sharing" target="_blank" rel="noreferrer">Download Resume</a>
                </button>
            </div>
        </div>
    );
};

export default ImageSection;
