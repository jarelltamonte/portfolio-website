import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";
import "../Style/Preloader.css"

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader" style={{ overflow: "hidden" }}>
      <div className="texts-container">
        <span>Think.</span>
        <span>Visualize.</span>
        <span>Assess.</span>
      </div>
    </div>
  );
};

export default PreLoader;