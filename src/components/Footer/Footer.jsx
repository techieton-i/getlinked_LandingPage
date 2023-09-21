const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer-contents">
        <div className="footer-terms">
          <h3>
            get<span>linked</span>
          </h3>
          <p>
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <div>
            <span>Terms of use</span> | <span>Privacy Policy</span>
          </div>
        </div>
        <div className="footer-links">
          <h3>Useful Links</h3>
          <div>
            <p>Overview</p>
            <p>Tiimeline</p>
            <p>FAQs</p>
            <p>Register</p>
            <p>Follow Us</p>
          </div>
        </div>
        <div className="contact-us">
          <h3>Contact Us</h3>
          <div>
            <div>+234 679 81819</div>
            <div>
              27,Alara Street <br />
              Yaba 100012 <br />
              Lagos State
            </div>
          </div>
        </div>
      </div>
      <p>All rights reserved. © getlinked Ltd.</p>
    </footer>
  );
};

export default Footer;
