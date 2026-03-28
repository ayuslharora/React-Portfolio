import React from 'react';

export const projects = [
    {
        id: 6,
        title: 'Flavor Forge',
        description: <>A modern <span className="text-amber-600 font-semibold">recipe finder app</span> built with React and Tailwind CSS.</>,
        fullDescription: "Flavor Forge is a comprehensive culinary web application that integrates highly dynamic routing and public recipe APIs. It features multi-faceted search (by ingredient, category, or region), a random meal generator, and a local-storage based Favorites system, seamlessly wrapped in a beautiful Tailwind interface.",
        image: import.meta.env.BASE_URL + 'project-flavor-forge.png',
        liveLink: "https://flavor-forge-sigma.vercel.app/",
        techStack: ["React", "Tailwind CSS", "Axios", "Vite"]
    },
    {
        id: 1,
        title: 'AI Powered GAME Controller',
        description: <>First AI/ML Project using <span className="text-amber-600 font-semibold">Python + CV and pyautogui</span> to control game.</>,
        fullDescription: "A revolutionary AI/ML based game controller built using Python, Computer Vision, and PyAutoGUI. It captures real-time video feed via a webcam, tracks specific hand gestures or body movements, and translates them into precise in-game actions, allowing for a completely hands-free, immersive gaming experience without traditional physical hardware.",
        image: import.meta.env.BASE_URL + 'project-ai-controller.jpg',
        liveLink: "", // Add live demo link here in the future
        techStack: ["Python", "OpenCV", "Machine Learning", "PyAutoGUI"]
    },
    {
        id: 2,
        title: 'Bakery Management Software',
        description: <>Class 12 project using <span className="text-amber-600 font-semibold">Python + MySQL</span> to manage sales, stock, and billing.</>,
        fullDescription: "Developed as a comprehensive Class 12 final project, this robust Desktop application utilizes Python and a MySQL database backend. It seamlessly handles end-to-end bakery operations including real-time inventory management, daily sales tracking, automated receipt generation, and detailed financial reporting.",
        image: import.meta.env.BASE_URL + 'project-bakery.jpg',
        liveLink: "", // Add live demo link here in the future
        techStack: ["Python", "MySQL", "Tkinter"]
    },
    {
        id: 3,
        title: 'AI Image/Video Generator',
        description: <>Hackathon project – built an <span className="text-amber-600 font-semibold">AI-powered generator</span> for images and videos.</>,
        fullDescription: "A cutting-edge hackathon submission that leverages advanced generative neural networks to create high-quality synthetic images and video clips from simple text prompts. Built under a strict time constraint, it features a clean UI and rapid generation pipelines utilizing foundational open-source AI networks.",
        image: import.meta.env.BASE_URL + 'project-ai-generator.jpg',
        liveLink: "", // Add live demo link here in the future
        techStack: ["React", "Stable Diffusion", "Python", "APIs"]
    },
    {
        id: 4,
        title: 'Hackathon Game',
        description: <>A fun <span className="text-amber-600 font-semibold">browser game</span> created with HTML, CSS, and JavaScript.</>,
        fullDescription: "An interactive, arcade-style browser game developed entirely with vanilla web technologies during a weekend hackathon. It features custom logic constraints, engaging visual aesthetics, and collision detection to keep players coming back.",
        image: import.meta.env.BASE_URL + 'project-hackathon-game.jpg',
        liveLink: "https://ayuslharora.github.io/Daydream_Hackathon-Debt_of_Seconds1/",
        techStack: ["HTML5", "Vanilla JS", "CSS3"]
    },
    {
        id: 5,
        title: 'Rock-Paper-Scissors',
        description: <>Mini-project built in <span className="text-amber-600 font-semibold">JavaScript</span>.</>,
        fullDescription: "A highly polished, responsive web adaptation of the classic Rock-Paper-Scissors. This mini-project served as an exercise in DOM manipulation and state management using vanilla JavaScript. It includes smooth CSS animations and functional score tracking.",
        image: import.meta.env.BASE_URL + 'project-rps.png',
        liveLink: "", // Add live demo link here in the future
        techStack: ["JavaScript", "HTML5", "CSS3"]
    },
];
