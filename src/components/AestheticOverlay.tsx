"use client";

import { motion } from "framer-motion";

export default function AestheticOverlay() {
    return (
        <>
            <div className="noise-overlay" />

            {/* Glow Orbs */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="glow-orb"
                style={{
                    width: "400px",
                    height: "400px",
                    top: "10%",
                    left: "5%",
                    background: "var(--accent-green)",
                }}
            />
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, -80, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="glow-orb"
                style={{
                    width: "350px",
                    height: "350px",
                    bottom: "15%",
                    right: "10%",
                    background: "var(--accent-cyan)",
                }}
            />
        </>
    );
}
