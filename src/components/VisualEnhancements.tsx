"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function VisualEnhancements() {
    const { scrollYProgress } = useScroll();
    const gridY = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <>
            <div className="vignette" />
            <div className="scanlines" />
            <motion.div
                style={{ y: gridY }}
                className="grid-background"
            />

            {/* Ambient Light */}
            <div
                className="fixed top-0 left-0 w-full h-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle at 50% -20%, rgba(0, 227, 100, 0.1), transparent 70%)",
                    zIndex: -2
                }}
            />
        </>
    );
}
