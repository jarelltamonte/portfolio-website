import { useParams, useNavigate } from "react-router-dom";
import { items } from "./projectsData";
import "../Style/ClickedProject.css";
import "../Style/Projects.css";
import { GoArrowDownRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Clicked = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const currentIndex = items.findIndex((item) => item.id.toString() === id);
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

    if (currentIndex === -1) {
        return (
            <div className="error-message">
                <div className="pn1">
                    <h1 className="pnf">Project not found</h1>
                    <p className="pnfm">The project you're looking for doesn't exist.</p>
                </div>
                <Link to="/work" style={{ textDecoration: 'none' }}>
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
        );
    }

    const project = items[currentIndex];

    const handleNextProject = () => {
        const nextIndex = currentIndex + 1;
        if (nextIndex < items.length) {
            navigate(`/clicked/${items[nextIndex].id}`);
        }
    };

    const handlePrevProject = () => {
        const prevIndex = currentIndex - 1;
        if (prevIndex >= 0) {
            navigate(`/clicked/${items[prevIndex].id}`);
        }
    };

    return (
        <div className="project-info">
            <div className="items">
                <p className="proj-title">{project.title}</p>
                <div className="item-desc1">
                    <p className="category">{project.category} - {project.year}</p>
                </div>
                <div className="technologies-list">
                    {project.technologies
                        .filter(Boolean)
                        .map((tech, idx) => (
                            <p key={idx} className="technologies">{tech}</p>
                    ))}
                </div>

                <p className="proj-description">{project.description}</p>

                {/* Navigation Arrows */}
                    <div className="div-arrow">
                        {currentIndex > 0 && (
                            <GoArrowDownRight
                                className="arrow-down prev-arrow"
                                onClick={handlePrevProject}
                            />
                        )}
                        {currentIndex < items.length - 1 && (
                            <GoArrowDownRight
                                className="arrow-down next-arrow"
                                onClick={handleNextProject}
                            />
                        )}
                    </div>
            </div>

            <div className="image-gallery">
                {project.image.length === 1 && (
                    <div className="collage layout-1">
                    <img src={project.image[0]} alt={`${project.title}`} />
                    </div>
                )}
                {project.image.length === 2 && (
                    <div className="collage layout-2">
                    {project.image.map((imgSrc, idx) => (
                        <img key={idx} src={imgSrc} alt={`${project.title} ${idx + 1}`} />
                    ))}
                    </div>
                )}
                {project.image.length === 3 && (
                    <div className="collage layout-3">
                    {project.image.map((imgSrc, idx) => (
                        <img key={idx} src={imgSrc} alt={`${project.title} ${idx + 1}`} />
                    ))}
                    </div>
                )}
                {project.image.length >= 4 && (
                    <div className="collage layout-4">
                    {project.image.map((imgSrc, idx) => (
                        <img key={idx} src={imgSrc} alt={`${project.title} ${idx + 1}`} />
                    ))}
                    </div>
                )}
                </div>

                <div className="technologies-list1">
                    {project.technologies
                        .filter(Boolean)
                        .map((tech, idx) => (
                            <p key={idx} className="technologies">{tech}</p>
                    ))}
                </div>

                <p className="proj-description1">{project.description}</p>

                {/* Navigation Arrows */}
                <div className="div-arrow1">
                    {currentIndex > 0 && (
                        <GoArrowDownRight
                            className="arrow-down prev-arrow"
                            onClick={handlePrevProject}                            />
                        )}
                    {currentIndex < items.length - 1 && (
                        <GoArrowDownRight
                            className="arrow-down next-arrow"
                            onClick={handleNextProject}
                        />
                    )}
            </div>
        </div>
    );
};

export default Clicked;
