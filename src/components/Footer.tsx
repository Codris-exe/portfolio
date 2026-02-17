"use client";

import { Reveal } from "./Reveal";

export default function Footer() {
    return (
        <footer id="contact" className="footer-section">
            <Reveal width="100%">
                <div className="footer-content">
                    <span className="footer-subtitle">WHAT'S NEXT?</span>
                    <h2 className="footer-title">LET'S WORK <span className="accent">TOGETHER</span></h2>
                    <p className="footer-desc">
                        Everything starts with a simple "Hello". If you have a project in mind or just want to chat about
                        High-Performance Systems, feel free to reach out!
                    </p>

                    <div className="contact-btn-group">
                        <a href="mailto:codris1@outlook.com" className="btn-email">
                            <span>codris1@outlook.com</span>
                            <i className="fas fa-arrow-right"></i>
                        </a>
                        <a href="https://github.com/Codris-exe" target="_blank" className="btn-social">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/rishab-gupta-91028b374" target="_blank" className="btn-social">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.instagram.com/lifewrishu/" target="_blank" className="btn-social">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; 2024 Rishab Gupta</p>
                        <p>Designed & Built with <i className="fas fa-heart" style={{ color: "var(--accent-green)" }}></i></p>
                    </div>
                </div>
            </Reveal>
        </footer>
    );
}
