import React from 'react';
import './OneSection.css'; 

interface CombinedSectionProps {} 

const CombinedSection: React.FC<CombinedSectionProps> = () => {
  return (
    <div className="combined-section">
      <div className="consultation-part">
        <h2>Get a free consultation!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae amet mauris odio et justo. Et odio at viverra.</p>
        <form className="consultation-form">
          <input type="email" placeholder="Email address" />
          <button type="submit">Submit</button>
        </form>
        <div className="consultation-image">
          {<img src="..\ca00199f30ff64821b5ba701e9ffa10a110ca8af.jpg" alt="Consultation" />}
        </div>
      </div>

      <footer className="main-footer">
        <div className="footer-section creator">
          <h3>Creator</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Vitae.</p>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"> {}
              {<FontAwesomeIcon icon="fa-brands fa-x-twitter" /> } 
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"> {}
              {<FontAwesomeIcon icon="fa-brands fa-facebook" />} 
            </a>
            {<FontAwesomeIcon icon="fa-brands fa-instagram" />}
          </div>
        </div>
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-section support">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Purchasing Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footer-section contact-me">
          <h3>Contact me</h3>
          <div className="contact-form">
            <input type="email" placeholder="Email address" />
            <button type="submit">Send</button>
          </div>
          <p><a href="#">Press</a></p>
          <p><a href="#">Help/Faq</a></p>
        </div>
      </footer>
    </div>
  );
};

export default CombinedSection;