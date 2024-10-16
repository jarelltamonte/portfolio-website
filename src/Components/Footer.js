import "../Style/Footer.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    // Separate state for each element
    const [letsTalkPosition, setLetsTalkPosition] = useState({ x: 0, y: 0 });
    const [githubPosition, setGithubPosition] = useState({ x: 0, y: 0 });
    const [instagramPosition, setInstagramPosition] = useState({ x: 0, y: 0 });
    const [linkedinPosition, setLinkedinPosition] = useState({ x: 0, y: 0 });

    // Generic handleMouseMove function to handle hover effect for each element
    const handleMouseMove = (e, setPosition) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2; // Centered movement
        const y = e.clientY - rect.top - rect.height / 2;
        setPosition({ x, y });
    };

    // Reset hover effect on mouse leave for each element
    const handleMouseLeave = (setPosition) => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <>
            <div className="footer-layer">
                <div className="text-content">
                    <p className="thought">HAVE A PROJECT IN MIND?</p>

                    {/* LET'S TALK link */}
                    <Link to="/contact" style={{ textDecoration: "none" }}>
                        <p className="lets-talk"
                            onMouseMove={(e) => handleMouseMove(e, setLetsTalkPosition)}
                            onMouseLeave={() => handleMouseLeave(setLetsTalkPosition)}
                            style={{
                                transform: `translate(${letsTalkPosition.x * 0.1}px, ${letsTalkPosition.y * 0.1}px)`,
                                transition: "transform 0.1s ease-out"
                            }}>
                            LET'S TALK
                        </p>
                    </Link>
                </div>

                {/* Apply hover effect to all links */}
                <div className="links">
                    <a href="https://github.com/jarelltamonte" target="_blank" rel="noopener noreferrer"
                        onMouseMove={(e) => handleMouseMove(e, setGithubPosition)}
                        onMouseLeave={() => handleMouseLeave(setGithubPosition)}
                        style={{
                            transform: `translate(${githubPosition.x * 0.1}px, ${githubPosition.y * 0.1}px)`,
                            transition: "transform 0.1s ease-out"
                        }}>
                        GITHUB
                    </a>

                    <a href="https://www.instagram.com/whoatethesushi/" target="_blank" rel="noopener noreferrer"
                        onMouseMove={(e) => handleMouseMove(e, setInstagramPosition)}
                        onMouseLeave={() => handleMouseLeave(setInstagramPosition)}
                        style={{
                            transform: `translate(${instagramPosition.x * 0.1}px, ${instagramPosition.y * 0.1}px)`,
                            transition: "transform 0.1s ease-out"
                        }}>
                        INSTAGRAM
                    </a>

                    <a href="https://www.linkedin.com/in/jarell-tamonte-6033b6296/" target="_blank" rel="noopener noreferrer"
                        onMouseMove={(e) => handleMouseMove(e, setLinkedinPosition)}
                        onMouseLeave={() => handleMouseLeave(setLinkedinPosition)}
                        style={{
                            transform: `translate(${linkedinPosition.x * 0.1}px, ${linkedinPosition.y * 0.1}px)`,
                            transition: "transform 0.1s ease-out"
                        }}>
                        LINKEDIN
                    </a>
                </div>
            </div>
        </>
    );
}

export default Footer;
