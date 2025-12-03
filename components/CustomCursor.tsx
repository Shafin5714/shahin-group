"use client";

import React, { useEffect, useState } from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    AnimatePresence,
} from "framer-motion";

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring for the follower
    // Stiffer spring for a more "architectural/precise" feel
    const springConfig = { damping: 30, stiffness: 200, mass: 0.8 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseDown = () => setIsHovered(true);
        const handleMouseUp = () => setIsHovered(false);

        // Check for hoverable elements
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable =
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.classList.contains("cursor-pointer") ||
                window.getComputedStyle(target).cursor === "pointer";

            if (isClickable) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [mouseX, mouseY, isVisible]);

    // Don't render on touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
        return null;
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Primary Pointer: Gold Diamond */}
                    <motion.div
                        className="fixed top-0 left-0 w-3 h-3 bg-brand-gold pointer-events-none z-9999"
                        style={{
                            x: mouseX,
                            y: mouseY,
                            translateX: "-50%",
                            translateY: "-50%",
                            rotate: 45, // Always a diamond
                        }}
                    />

                    {/* Secondary Follower: Kinetic Diamond Outline */}
                    <motion.div
                        className="fixed top-0 left-0 w-10 h-10 border pointer-events-none z-9998"
                        style={{
                            x: cursorX,
                            y: cursorY,
                            translateX: "-50%",
                            translateY: "-50%",
                        }}
                        variants={{
                            idle: {
                                rotate: [45, 225], // Slow rotation
                                scale: 1,
                                borderColor: "rgba(255, 255, 255, 0.5)",
                                backgroundColor: "rgba(161, 161, 170, 0)",
                                transition: {
                                    rotate: {
                                        duration: 10,
                                        repeat: Infinity,
                                        ease: "linear",
                                    },
                                },
                            },
                            hover: {
                                rotate: 0, // Snaps to square
                                scale: 1.5,
                                borderColor: "rgba(161, 161, 170, 1)", // brand-gold
                                backgroundColor: "rgba(161, 161, 170, 0.1)", // faint gold tint
                                transition: {
                                    duration: 0.3,
                                    ease: "backOut",
                                },
                            },
                        }}
                        animate={isHovered ? "hover" : "idle"}
                    />
                </>
            )}
        </AnimatePresence>
    );
}
