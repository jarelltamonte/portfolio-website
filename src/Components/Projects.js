import React, { useEffect, useState, useCallback } from "react";
import { items } from "./projectsData";
import { useNavigate } from "react-router-dom";
import "../Style/Projects.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


const Projects = () => {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState(items);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [filPosition, setFilPosition] = useState({ x: 0, y: 0 });
    const navigate = useNavigate();

    const filters = ["Website", "Mobile App", "Filter"];

    const filterItems = useCallback(() => {
        if (selectedFilters.length > 0) {
            const tempItems = selectedFilters
                .map((selectedCategory) =>
                    items.filter((item) => item.category === selectedCategory)
                )
                .flat();
            setFilteredItems(tempItems);
        } else {
            setFilteredItems([...items]);
        }
    }, [selectedFilters]);

    useEffect(() => {
        filterItems();
    }, [filterItems]);

    useEffect(() => {
        document.title = "Works - Jarell Tamonte";
    }, []);

    const handleFilterButtonClick = (selectedCategory) => {
        if (selectedFilters.includes(selectedCategory)) {
            setSelectedFilters(
                selectedFilters.filter((el) => el !== selectedCategory)
            );
        } else {
            setSelectedFilters([...selectedFilters, selectedCategory]);
        }
    };

    const handleMouseMove = (event, item) => {
        const { clientX, clientY } = event;
        setPosition({ x: clientX, y: clientY });
        setHoveredItem(item);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const handleCardClick = (id) => {
        navigate(`/clicked/${id}`);
    };

    return (
        <div className="project-app">
            <div className="first-project">
                <p className="project-title">
                    Creating next level <span className="digi-prod">digital products</span>
                </p>
                <FontAwesomeIcon icon={faGlobe} className="faShape"/>
            </div>
            
            <div className="buttons-container">
                {filters.map((category, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleFilterButtonClick(category)}
                        onMouseMove={(e) => {
                            const rect = e.target.getBoundingClientRect();
                            const x = e.clientX - rect.left - rect.width / 2;
                            const y = e.clientY - rect.top - rect.height / 2;
                            setFilPosition({ x, y });
                        }}
                        onMouseLeave={() => setFilPosition({ x: 0, y: 0 })}
                        style={{
                            transform: `translate(${filPosition.x * 0.1}px, ${filPosition.y * 0.1}px)`,
                        }}
                        className={`button-work ${
                            selectedFilters.includes(category) ? "active" : ""
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="items-container">
                {filteredItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="item"
                        onMouseMove={(e) => handleMouseMove(e, item)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleCardClick(item.id)}
                    >
                        <p className="item-name">{item.title}</p>
                        <div className="item-desc">
                            <p className="category">{item.category}</p>
                            <p className="year">{item.year}</p>
                        </div>
                    </div>
                ))}
            </div>

            {hoveredItem && hoveredItem.image?.length > 0 && (
                <div
                    className="hovered-image"
                    style={{
                        top: `${position.y}px`,
                        left: `${position.x}px`,
                        backgroundImage: `url(${hoveredItem.image[0]})`,
                    }}
                >
                    <div className="view-circle">View</div>
                </div>
            )}
        </div>
    );
};

export default Projects;
