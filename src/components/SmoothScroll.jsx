import React from 'react';
import { ReactLenis } from 'lenis/react';

const SmoothScroll = ({ children }) => {
    return (
        <ReactLenis root options={{
            lerp: 0.08,
            duration: 1.2,
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        }}>
            {children}
        </ReactLenis>
    );
};

export default SmoothScroll;
