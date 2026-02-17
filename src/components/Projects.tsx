"use client";

import { Reveal } from "./Reveal";
import { CardTilt } from "./CardTilt";
import { useEffect, useState } from "react";

const projects = [
    {
        num: "01.",
        title: "3D RPG Engine",
        category: "C++ / Unreal Engine / Systems Arch",
        link: "https://github.com/Codris-exe/RPGGame",
        image: "/project_rpg.png",
    },
    {
        num: "02.",
        title: "Smart Link Hub",
        category: "Full Stack / Next.js / Performance",
        link: "https://github.com/Codris-exe/Smart-Link-Hub-Generator",
        image: "/project_smart_link_hub.png",
    },
    {
        num: "03.",
        title: "Fake Link Detector",
        category: "JavaScript / ML / Security",
        link: "https://github.com/Codris-exe/FakeLinkDetector",
        image: "/project_db.png",
    },
    {
        num: "04.",
        title: "Hypixel SkyBlock",
        category: "Java / Systems Migration / Game Logic",
        link: "https://github.com/Codris-exe/HypixelSkyBlock",
        image: "/project_sky_block.png",
    },
    {
        num: "05.",
        title: "Hand Tracking AI",
        category: "Python / Computer Vision / Mediapipe",
        link: "https://github.com/Codris-exe/HAND-TRACKING-GESTURE-2",
        image: "/project_hand.png",
    },
    {
        num: "06.",
        title: "SheepWars Remake",
        category: "Java / High Performance Networking",
        link: "https://github.com/Codris-exe/sheepwars",
        image: "/project_sheep_wars.png",
    },
];

export default function Projects() {
    const [mounted, setMounted] = useState(false);
    const [randomMems, setRandomMems] = useState<number[]>([]);

    useEffect(() => {
        setMounted(true);
        setRandomMems(projects.map(() => Math.floor(Math.random() * 512)));
    }, []);

    return (
        <section id="projects" className="projects-section">
            <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <Reveal width="100%">
                    <h2 className="section-title">SELECTED <span className="accent">WORKS</span></h2>
                </Reveal>

                <div className="project-grid">
                    {projects.map((project, idx) => (
                        <Reveal key={project.num} width="100%" direction="up" delay={0.2 * idx}>
                            <CardTilt>
                                <div
                                    className="project-card"
                                    onMouseMove={(e) => {
                                        const rect = e.currentTarget.getBoundingClientRect();
                                        e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                                        e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                                    }}
                                >
                                    <div className="scan-line" />

                                    {/* Tech Data Decoration */}
                                    <div className="absolute top-2 right-4 flex gap-4 opacity-20 font-mono text-[8px] pointer-events-none">
                                        <span>TYPE: SRC_OBJ</span>
                                        <span>MEM: {mounted ? randomMems[idx] : "---"}KB</span>
                                    </div>

                                    <div
                                        className="card-image"
                                        style={{
                                            backgroundImage: `url('${project.image}')`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                    >
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="card-overlay">
                                            <i className="fas fa-external-link-alt" style={{ color: "#fff", fontSize: "2rem" }}></i>
                                        </a>
                                    </div>
                                    <div className="card-info">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="card-num">{project.num}</span>
                                            <div className="h-1 w-8 bg-accent-green opacity-30 mt-2" />
                                        </div>
                                        <h4>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
                                                {project.title}
                                            </a>
                                        </h4>
                                        <p className="text-muted text-[11px] uppercase tracking-widest">{project.category}</p>

                                        {/* Bottom Tech Bar */}
                                        <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
                                            <div className="flex gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <div key={i} className="w-1 h-1 bg-white/10 rounded-full" />
                                                ))}
                                            </div>
                                            <span className="text-[9px] opacity-20 font-mono">STABLE_OS_v2.0</span>
                                        </div>
                                    </div>
                                </div>
                            </CardTilt>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
