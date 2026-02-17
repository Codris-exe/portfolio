"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "HOME", href: "#home" },
        { name: "SKILLS", href: "#about" },
        { name: "EXPERIENCE", href: "#experience" },
        { name: "WORKS", href: "#projects" },
        { name: "CONNECT", href: "#contact" },
    ];

    return (
        <>
            <nav className="navbar">
                <div className="logo">Rishab<span className="dot">.</span></div>
                <div
                    className={`menu-btn ${isOpen ? 'active' : ''}`}
                    id="menuToggle"
                    onClick={toggleMenu}
                >
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="side-menu active"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
                    >
                        <div className="side-menu-content">
                            <ul className="side-menu-links">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="menu-link"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
