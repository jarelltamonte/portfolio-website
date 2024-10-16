import './App.css'; 
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import NoPage from './Components/NoPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Circle from './Components/Circle';
import ScrollToTop from './Components/ScrollToTop';

export default function App() {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);

  const handlePreloaderDone = () => {
    setIsPreloaderDone(true);
  };

  return (
    <>
      {!isPreloaderDone && <Circle onPreloaderDone={handlePreloaderDone} />}
      {isPreloaderDone && (
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="work" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}
