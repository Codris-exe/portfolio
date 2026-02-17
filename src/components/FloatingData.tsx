"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const DATA_SNIPPETS = [
    "01011001", "SYSTEM_READY", "DECRYPTING...", "RISHAB.SYS",
    "ACCESS_GRANTED", "NODE_88", "LATENCY: 12ms", "ENCRYPT_AES_256"
];

interface DataItem {
    id: number;
    x: string;
    delay: number;
    duration: number;
    snippet: string;
}

export default function FloatingData() {
    const [mounted, setMounted] = useState(false);
    const [items, setItems] = useState<DataItem[]>([]);

    useEffect(() => {
        setMounted(true);
        const newItems = [...Array(15)].map((_, i) => ({
            id: i,
            x: Math.random() * 100 + "%",
            delay: Math.random() * 20,
            duration: Math.random() * 10 + 10,
            snippet: DATA_SNIPPETS[Math.floor(Math.random() * DATA_SNIPPETS.length)]
        }));
        setItems(newItems);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-2] opacity-20">
            {items.map((item) => (
                <motion.div
                    key={item.id}
                    initial={{
                        x: item.x,
                        y: "110%",
                        opacity: 0
                    }}
                    animate={{
                        y: "-10%",
                        opacity: [0, 0.5, 0]
                    }}
                    transition={{
                        duration: item.duration,
                        repeat: Infinity,
                        delay: item.delay,
                        ease: "linear"
                    }}
                    className="absolute font-mono text-[10px]"
                    style={{ color: "var(--accent-green)" }}
                >
                    {item.snippet}
                </motion.div>
            ))}
        </div>
    );
}
