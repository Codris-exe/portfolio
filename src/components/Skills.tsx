"use client";

import { Reveal } from "./Reveal";

const skillCategories = [
    {
        title: "Backend",
        skills: [
            { name: "Java", icon: "fab fa-java" },
            { name: "Python", icon: "fab fa-python" },
            { name: "Node.js", icon: "fab fa-node-js" },
            { name: "C++", icon: "fas fa-code" },
        ],
    },
    {
        title: "Frontend",
        skills: [
            { name: "React", icon: "fab fa-react" },
            { name: "HTML5", icon: "fab fa-html5" },
            { name: "CSS3", icon: "fab fa-css3-alt" },
            { name: "JavaScript", icon: "fab fa-js" },
        ],
    },
    {
        title: "Database",
        skills: [
            { name: "MySQL", icon: "fas fa-database" },
            { name: "MongoDB", icon: "fas fa-leaf" },
        ],
    },
];

export default function Skills() {
    return (
        <section id="about" className="about-grid-section">
            <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <div className="tech-section-content">
                    <Reveal width="100%">
                        <h2 className="section-title" style={{ textAlign: "center", marginBottom: "4rem" }}>
                            TECH <span className="accent">ARSENAL</span>
                        </h2>
                    </Reveal>

                    <div className="tech-grid">
                        {skillCategories.map((category, idx) => (
                            <div key={category.title} className="skill-category">
                                <Reveal direction="down" delay={0.2 * idx}>
                                    <h4>{category.title}</h4>
                                </Reveal>
                                <div className="skill-tags">
                                    {category.skills.map((skill, sIdx) => (
                                        <Reveal
                                            key={skill.name}
                                            direction="up"
                                            delay={0.1 * sIdx + (0.2 * idx)}
                                        >
                                            <span className="tech-chip">
                                                <span><i className={skill.icon}></i> {skill.name}</span>
                                            </span>
                                        </Reveal>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
