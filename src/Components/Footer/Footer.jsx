import "./Footer.scss";
import React from "react";
import logoImg from "../../../src/assets/TELUS_Logo.svg";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__section footer__logo">
                    <NavLink to="/"><img src={logoImg} alt="Telus Logo" className="footer__logo-image" /></NavLink>
                </div>

                <div className="footer__section footer__contact">
                    <h3>Contact Telus Canada</h3>
                    <p>
                        <strong>Phone:</strong> 1-866-558-2273
                    </p>
                    <p>
                        <strong>Email:</strong> <a href="mailto:support@telus.com">support@telus.com</a>
                    </p>
                    <p>
                        <strong>Address:</strong> 510 West Georgia St, Vancouver, BC V6B 0M3
                    </p>
                </div>

                <div className="footer__section footer__extra">
                    <p>
                        <strong>Customer Support:</strong> 24/7 Available
                    </p>
                    <p>
                        <strong>Visit Us:</strong> <a href="https://www.telus.com/en/tv/what-to-watch">telus.com</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
