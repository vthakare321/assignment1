import React from 'react';
import '../App.css'


const Footer = () => {
   
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <h1>Lookscout</h1>
                    <p>Generate outside the box thinking with the possibility to target the low.</p>
                </div>
                <div className="footer-links">
                    <div className="footer-section">
                        <h3>Resources</h3>
                        <ul>
                            <li>Community</li>
                            <li>Events</li>
                            <li>Help Center</li>
                            <li>Partners</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Products</h3>
                        <ul>
                            <li>Integrations</li>
                            <li>Solutions</li>
                            <li>Features</li>
                            <li>Enterprise</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-notifications">
                    <h3>Get Email Notifications</h3>
                    <p>Generate outside the box thinking with the possibility to target the low</p>
                    <div className="email-input">
                        <input type="email" placeholder="Enter email..." />
                        <button >Submit</button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2023 Lookscout. All Rights Reserved.</p>
                <div className="social-icons">
                    <span>Facebook</span>
                    <span>Google</span>
                    <span>Apple</span>
                    <span>Instagram</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
