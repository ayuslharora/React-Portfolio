import React from 'react';

const HeroPortrait = () => {
    return (
        <div className="relative flex justify-center items-center">

            {/* Portrait container */}
            <div
                className="relative inline-block z-[5]"
                style={{ width: "clamp(180px, 28vw, 320px)" }}
            >
                <img
                    src="/portrait.png"
                    className="block w-full h-auto rounded-[25%] animate-[hover_2s_ease-in-out_infinite] relative z-[1]"
                    alt="Portrait of Ayush Arora"
                />

                {/* Crossbar 1 (45deg) */}
                <span
                    className="absolute left-[50%] top-[50%] w-[150%] bg-black origin-center z-[0]"
                    style={{
                        height: "clamp(8px, 1.2vw, 24px)",
                        borderRadius: "100%",
                        transform: "translate(-50%, -50%) rotate(45deg) scaleX(0)",
                        animation: "cross1 .5s ease-in .7s forwards"
                    }}
                ></span>

                {/* Crossbar 2 (-45deg) */}
                <span
                    className="absolute left-[50%] top-[50%] w-[150%] bg-black origin-center z-[0]"
                    style={{
                        height: "clamp(8px, 1.2vw, 24px)",
                        borderRadius: "100%",
                        transform: "translate(-50%, -50%) rotate(-45deg) scaleX(0)",
                        animation: "cross2 .5s ease-in .7s forwards"
                    }}
                ></span>
            </div>
        </div>
    );
};

export default HeroPortrait;
