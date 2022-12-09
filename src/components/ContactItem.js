import React from 'react';

const ContactItem = ({ icon, text, title, faIcon }) => {
    return (
        <div className='ContactItem'>
            <div className="contact">
                {icon &&
                    <img src={icon} alt="" />
                }
                {
                    faIcon && faIcon
                }
                <div className="right-items">
                    <h6>{title}</h6>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default ContactItem;
