"use client";

import { Reveal } from "./Reveal";
import { TextReveal } from "./TextReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
    {
        tag: "2022: Origins",
        title: "Systems Discovery",
        desc: "Initially explored server-side logic and system abstraction using Java, building high-performance gameplay APIs.",
        skills: ["Java", "API Engineering"],
        side: "left",
    },
    {
        tag: "2023: Evolution",
        title: "3D Engines & C++",
        desc: "Transitioned into low-level systems with Unreal Engine, developing complex RPG mechanics and shader logic.",
        skills: ["C++", "Unreal Engine", "Game Dev"],
        side: "right",
    },
    {
        tag: "2024: Security",
        title: "ML & Cyber Protection",
        desc: "Engineered real-time fraud detection systems using Machine Learning to safeguard web environments.",
        skills: ["Machine Learning", "MLOps", "Security"],
        side: "left",
    },
    {
        tag: "Current Focus",
        title: "C++ & Full Stack Engineering",
        desc: "Currently specializing in high-performance C++ systems and architecting scalable full-stack web solutions.",
        skills: ["C++ Architecture", "Full Stack", "Distributed Systems"],
        side: "right",
        isCurrent: true,
    },
];

export default function Journey() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="experience" ref={containerRef} className="timeline-section">
            <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <Reveal width="100%" direction="down">
                    <h2 className="section-title">MY <span className="accent">JOURNEY</span></h2>
                </Reveal>
                <TextReveal
                    text="From curiosity to creation - the story continues"
                    className="section-subtitle"
                    delay={0.4}
                />

                <div className="timeline">
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="timeline-line"
                    ></motion.div>
                    {items.map((item, index) => (
                        <div key={index} className={`timeline-item ${item.side}`}>
                            <div className="timeline-dot"></div>
                            <Reveal width="100%">
                                <div
                                    className="timeline-content"
                                    onMouseMove={(e) => {
                                        const rect = e.currentTarget.getBoundingClientRect();
                                        e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                                        e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                                    }}
                                >
                                    {/* Tech Brackets */}
                                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent-green/30 rounded-tl-sm pointer-events-none" />
                                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent-green/30 rounded-br-sm pointer-events-none" />

                                    <div className="flex justify-between items-start mb-4">
                                        <span className={`timeline-tag ${item.isCurrent ? "current" : ""}`}>
                                            {item.tag}
                                        </span>
                                        <span className="font-mono text-[9px] opacity-20 tracking-tighter">NODE_ID_{index + 104}</span>
                                    </div>

                                    <h3 className="holographic-text" style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{item.title}</h3>
                                    <p style={{ fontSize: "0.85rem", opacity: 0.7, lineHeight: "1.6" }}>{item.desc}</p>

                                    {item.skills.map((s) => (
                                        <span key={s} className="tech-chip" style={{ padding: "6px 15px", fontSize: "0.7rem" }}>
                                            <span>
                                                <i className="fas fa-microchip text-[10px] opacity-50 mr-2"></i>
                                                {s}
                                            </span>
                                        </span>
                                    ))}

                                    {/* Visual Status Bar */}
                                    <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: item.isCurrent ? "100%" : "70%" }}
                                            className="h-full bg-accent-green/40"
                                        />
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
