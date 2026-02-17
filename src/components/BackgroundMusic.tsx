"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackgroundMusic() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [loadError, setLoadError] = useState(false);

    useEffect(() => {
        // Attempt autoplay on first meaningful interaction
        const attemptPlay = async () => {
            if (audioRef.current && !isPlaying) {
                try {
                    await audioRef.current.play();
                    setIsPlaying(true);
                } catch (e) {
                    // Standard browser behavior - needs explicit user click
                    console.log("Autoplay waiting for user...");
                }
            }
        };

        // We keep trying on more interaction types
        window.addEventListener("mousedown", attemptPlay);
        window.addEventListener("keydown", attemptPlay);
        window.addEventListener("scroll", attemptPlay, { passive: true });

        return () => {
            window.removeEventListener("mousedown", attemptPlay);
            window.removeEventListener("keydown", attemptPlay);
            window.removeEventListener("scroll", attemptPlay);
        };
    }, [isPlaying]);

    const togglePlay = async () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                try {
                    await audioRef.current.play();
                    setIsPlaying(true);
                    setLoadError(false);
                } catch (e) {
                    console.error("Manual playback failed:", e);
                    setLoadError(true);
                }
            }
        }
    };

    return (
        <div className="audio-control">
            <audio
                ref={audioRef}
                src="/zen-track.mp3"
                loop
                preload="auto"
                onLoadedData={() => {
                    setIsReady(true);
                    if (audioRef.current) audioRef.current.volume = 0.3;
                }}
                onError={() => setLoadError(true)}
            />

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlay}
                className="audio-toggle-btn"
                style={{
                    borderColor: loadError ? "#ff4444" : "var(--accent-green)",
                    opacity: isReady ? 1 : 0.6
                }}
            >
                <AnimatePresence mode="wait">
                    {loadError ? (
                        <motion.i
                            key="error"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="fas fa-exclamation-triangle"
                            style={{ color: "#ff4444" }}
                        />
                    ) : !isReady ? (
                        <motion.span
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{ fontSize: "12px", fontWeight: "bold" }}
                        >
                            ...
                        </motion.span>
                    ) : isPlaying ? (
                        <motion.i
                            key="volume-up"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="fas fa-volume-up"
                        />
                    ) : (
                        <motion.i
                            key="volume-mute"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="fas fa-volume-mute"
                        />
                    )}
                </AnimatePresence>

                <div className="audio-wave">
                    {[...Array(4)].map((_, i) => (
                        <motion.span
                            key={i}
                            animate={{
                                height: isPlaying ? [4, 16, 4] : 4
                            }}
                            transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: i * 0.15,
                                ease: "easeInOut"
                            }}
                            className="wave-bar"
                        />
                    ))}
                </div>
            </motion.button>

            {loadError && (
                <div style={{
                    position: 'absolute',
                    left: '60px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    whiteSpace: 'nowrap',
                    fontSize: '10px',
                    color: '#ff4444',
                    background: 'rgba(0,0,0,0.8)',
                    padding: '4px 8px',
                    borderRadius: '4px'
                }}>
                    Audio load error. Try refreshing.
                </div>
            )}
        </div>
    );
}
