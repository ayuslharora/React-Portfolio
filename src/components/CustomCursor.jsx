import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    const [isHovering, setIsHovering] = useState(false);
    const [isTextHover, setIsTextHover] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const handleMouseOver = (e) => {
            try {
                if (!e || !e.target) return;
                const target = e.target;
                const tag = target.tagName ? target.tagName.toLowerCase() : '';
                
                const isClickable = tag === 'a' || tag === 'button' || 
                                    (target.closest && (target.closest('a') || target.closest('button')));

                if (isClickable) {
                    setIsHovering(true);
                    setIsTextHover(false);
                } else if (tag === 'input' || tag === 'textarea') {
                    setIsTextHover(true);
                    setIsHovering(false);
                } else {
                    setIsHovering(false);
                    setIsTextHover(false);
                }
            } catch (err) {
                setIsHovering(false);
                setIsTextHover(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 32,
            width: 32,
            backgroundColor: 'rgba(251, 191, 36, 0.1)', // Very faint amber
            border: '1px solid rgba(251, 191, 36, 0.4)', // Amber border
            backdropFilter: 'blur(4px)',
            opacity: 1,
            mixBlendMode: 'normal'
        },
        hover: {
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            height: 64,
            width: 64,
            backgroundColor: 'rgba(251, 191, 36, 0.2)', // Slightly more visible amber
            border: '1px solid rgba(251, 191, 36, 0.6)', // Stronger amber border
            backdropFilter: 'blur(8px)',
            opacity: 1,
            mixBlendMode: 'normal'
        },
        text: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 32,
            width: 32,
            opacity: 0,
            transition: { duration: 0.1 }
        }
    };

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999]"
                variants={variants}
                animate={isTextHover ? 'text' : isHovering ? 'hover' : 'default'}
                transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
            />
            {/* Subtle inner dot */}
            {!isTextHover && (
                <div 
                    className="fixed top-0 left-0 w-2 h-2 bg-amber-500 rounded-full pointer-events-none z-[10000]"
                    style={{
                        transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`,
                        mixBlendMode: 'normal',
                        boxShadow: '0 0 10px 2px rgba(251, 191, 36, 0.5)'
                    }}
                />
            )}
        </>
    );
};

export default CustomCursor;
