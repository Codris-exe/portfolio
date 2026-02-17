"use client";

import { useEffect, useState } from "react";

export default function Sidebar() {
    const [isOut, setIsOut] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsOut(true);
            } else {
                setIsOut(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className={`sidebar-left ${isOut ? 'sidebar-out' : ''}`}>
                <a href="mailto:codris1@outlook.com" className="vertical-email">
                    codris1@outlook.com
                </a>
            </div>

            <div className={`sidebar-right ${isOut ? 'sidebar-out' : ''}`}>
                <div className="status-widget">
                    <div className="status-dot"></div>
                    <div className="status-text">CURRENTLY BUILDNG THE FUTURE</div>
                </div>

                <div className="stat-item">
                    <span className="stat-num">3+</span>
                    <span className="stat-label">Years of<br />Experience</span>
                </div>
                <div className="stat-item">
                    <span className="stat-num">8+</span>
                    <span className="stat-label">Successful<br />Projects</span>
                </div>
            </div>
        </>
    );
}
