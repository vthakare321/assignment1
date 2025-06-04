import React from 'react';
import '../App.css'

import verge from '../images/varge.png'
import slack from '../images/slack1.png'
import google from '../images/google.png'
import paypal from '../images/paypal.png'
import pinterest from '../images/pinterest.png'
import mail from '../images/mail.png'

const ProudSection = () => {
  return (
    <div className="proud-section">
      <h2>Proud to Be Used By</h2>
      <p>
        Professionally cultivate one-to-one customer service with robust ideas.
        Dynamically innovate resource- <br/>leveling customer service for state of the art customer service.
      </p>
      <div className="logo-container">
        <img src={verge} alt="The Verge" />
        <img src={slack} alt="Slack" />
        <img src={google} alt="Google" />
        <img src={paypal} alt="PayPal" />
        <img src={pinterest} alt="Pinterest" />
        <img src={mail} alt="Mailchimp" />
      </div>
    </div>
  );
};

export default ProudSection;
