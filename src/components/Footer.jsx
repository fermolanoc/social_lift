import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
        <div className="footer__content">
            <div className="footer__content__message">
                <h2>Contact Us</h2>
                <p>Send us a message</p>
                <form action="" className="footer__content__message--form">
                    <label htmlFor="name">Full name</label>
                    <input type="text" name="name" id="name" autoComplete="name" required/>
                    <label htmlFor="email">Your E-mail</label>
                    <input type="email" name="email" id="email" autoComplete="email" required/>
                    <label htmlFor="message">Your Message</label>
                    <textarea name="message" id="message" cols="30" rows="10" required></textarea>
                    <button type="submit">Send message</button>
                </form>
            </div>
            <div className="footer__content__sidemap">
            <h2>Sitemap</h2>
                <p>All our pages</p>
                <div className="footer__content__sitemap--list">
                  <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                  </ul>
                </div>
            </div>
            <div className="footer__content__contact">
            <div className="footer__company__name">Social Lift</div>
            <p>Contact info</p>
            <div className="footer__content__contact__details">
              <div className="footer__content__contact--phone"><span className="fas fa-phone"></span> +1 612 098 7659</div>
              <div className="footer__content__contact--email"><span className="fas fa-envelope"></span> email@sociallift.com</div>
              <div className="footer__content__contact--address"><span className="fas fa-map-marker-alt"></span> 729 St SE, Office 101 <br></br>Dinkytown, Minneapolis, MN</div>
            </div>
            </div>
        </div>
      <p className="copyright">Copyright ⓒ {year} All Rights Reserved | <b> Social Lift</b></p>
    </footer>
  );
}

export default Footer;
