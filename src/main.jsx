import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './index.css'
import App from './App.jsx'
import ContactForm from './components/ContactForm.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import ProjectDetail from './components/ProjectDetail.jsx'

const RootLayout = () => {
  const [isTouchDevice] = useState(
      typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches
  );

  return (
    <>
      {!isTouchDevice && <CustomCursor />}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/form" element={<ContactForm />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/React-Portfolio">
    <RootLayout />
  </BrowserRouter>
)
