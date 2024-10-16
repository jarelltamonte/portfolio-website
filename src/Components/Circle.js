import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import '../Style/Circle.css';

const Circle = ({ onPreloaderDone }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showMabuhay, setShowMabuhay] = useState(false);

  useEffect(() => {
    const mabuhayTimer = setTimeout(() => {
      setShowMabuhay(true);
    }, 4000);

    const preloaderTimer = setTimeout(() => {
      setIsVisible(false);
      if (onPreloaderDone) {
        onPreloaderDone();
      }
    }, 5000);

    // Cleanup timers on unmount
    return () => {
      clearTimeout(mabuhayTimer);
      clearTimeout(preloaderTimer);
    };
  }, [onPreloaderDone]);

  if (!isVisible) return null;

  return createPortal(
    <div className="circle-preloader">
      <div className="circlee"></div>
      <p className={`mabuhay ${showMabuhay ? 'visible' : ''}`}>Mabuhay!</p>
    </div>,
    document.body
  );
};

export default Circle;
