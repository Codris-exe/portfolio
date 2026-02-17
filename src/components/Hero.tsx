"use client";

import { Reveal } from "./Reveal";
import { TextReveal } from "./TextReveal";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="play-icon"
        >
          <i className="fas fa-code"></i>
        </motion.div>

        <Reveal width="100%" direction="down">
          <h1 className="hero-title">
            <span className="outline-text">SOFTWARE</span><br />
            <span className="solid-text">DEVELOPER</span>
          </h1>
        </Reveal>

        <TextReveal
          className="hero-desc"
          text="Hi! I'm Rishab Gupta. A creative developer specializing in Game Interaction Systems and high-performance Web Solutions. With a deep passion for backend optimization and scalable architecture, I turn complex ideas into seamless digital realities. I love solving difficult problems with clean, efficient code."
          delay={0.5}
        />

        <div className="hero-btns">
          <Reveal direction="right" delay={0.8}>
            <Magnetic>
              <div className="btn-wrapper">
                <span className="btn-accent tl"></span>
                <span className="btn-accent br"></span>
                <a href="#projects" className="btn-main">
                  <span>VIEW WORK</span>
                </a>
              </div>
            </Magnetic>
          </Reveal>
          <Reveal direction="left" delay={0.8}>
            <Magnetic>
              <div className="btn-wrapper">
                <span className="btn-accent tl"></span>
                <span className="btn-accent br"></span>
                <a href="https://github.com/Codris-exe" target="_blank" className="btn-outline">
                  <span><i className="fab fa-github"></i> GITHUB</span>
                </a>
              </div>
            </Magnetic>
          </Reveal>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="scroll-indicator"
      >
        <span>SCROLL FOR MORE</span>
        <i className="fas fa-arrow-down"></i>
      </motion.div>
    </section>
  );
}
