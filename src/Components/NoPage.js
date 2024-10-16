import "../Style/404.css"
import { Link } from "react-router-dom";
import { useState } from "react";

const NoPage = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2; // Centered movement
        const y = e.clientY - rect.top - rect.height / 2;

        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <div className="outer-layer">
            <h1 className="oops">Oops<span className="four">404!</span></h1>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="circle-error" 
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                    transform: `translate(${position.x * 0.1}px, ${position.y * 0.1}px)`,
                    transition: "transform 0.1s ease-out"
                }}>
                    <span className="error-circle-text"></span>
                </div>
            </Link>
        </div>
    )
}

export default NoPage;