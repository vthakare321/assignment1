import React from 'react'
import '../App.css';

const MailInput = () => {
  return (
    <div className="mailcontainer">
      <h1 className="heading">1% OF THE INDUSTRY</h1>
      <p className="subheading">
        Welcome to your new digital reality that will rock <br/> your world truly at all throughout.
      </p>
      <div className="form-container">
        <input type="email" placeholder="Enter your email" className="email-input" />
        <button className="submit-button">Submit</button>
      </div>
      <div className="support-info">
        <div className="info-item">✔ Fully Secure</div>
        <div className="info-item">✔ 24/7 Support</div>
        <div className="info-item">✔ Done Deal</div>
      </div>
    </div>
  );
}

export default MailInput
