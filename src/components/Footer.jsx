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
        </div>
      <p className="copyright">Copyright ⓒ {year} | <b> Social Lift</b></p>
    </footer>
  );
}

export default Footer;
