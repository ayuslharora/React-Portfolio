# Ayush Arora | Interactive Developer Portfolio

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

Welcome to the source code of my personal portfolio website! This project is a modern, highly interactive web application designed to showcase my projects, skills, and background as an AI Engineer and web developer.

## ✨ Key Features

- **Glassmorphic UI**: Beautiful, frosted-glass design elements with curated color gradients. 
- **Smooth Scrolling**: Implemented using **Lenis** to provide a buttery-smooth scrolling trajectory and customized scrolling indicators.
- **Micro-interactions**: Subtle but impactful hover states, custom cursors, and entry animations powered entirely by **Framer Motion**.
- **Dynamic Project Routing**: A scalable React Router setup that generates dedicated, full-page case studies (`/project/:id`) for every portfolio piece seamlessly dynamically pulling from a central data hub.
- **Serverless Contact Form**: Fully functional and secure contact form using **Formspree** and native fetch logic, sending messages directly to my inbox without needing a custom backend.
- **Infinite Marquee Footer**: A CSS-powered infinite ticker that dynamically cycles through key information at the bottom of the page.

## 🛠️ Tech Stack

- **Framework**: React 19 (via Vite)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Forms**: Formspree (BaaS)

## 🚀 Getting Started

If you want to view the source code locally or run it on your own machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### Installation

1. Clone this repository:
```bash
git clone https://github.com/ayuslharora/React-Portfolio.git
```
2. Navigate into the directory:
```bash
cd React-Portfolio
```
3. Install the dependencies:
```bash
npm install
```
4. Start the frontend development server:
```bash
npm run dev
```

The site will now be running on `http://localhost:5173`.

## 📂 Project Structure Highlights
- `/src/components/*` - Modular React components composing the application UI (`Hero`, `NavBar`, `Projects`, `Footer`).
- `/src/data/projectsData.jsx` - The central SSOT (Single Source Of Truth) containing metadata for all featured projects dynamically consumed by both the grid and details pages.
- `/src/main.jsx` - The main application entry point orchestrating React Router.

## 📬 Contact
Feel free to reach out to me via the functional contact form on the live site, or connect with me via [LinkedIn](https://www.linkedin.com/in/ayush-arora-678758376/) or [GitHub](https://github.com/ayuslharora).
