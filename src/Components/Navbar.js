import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "../Style/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location

  // Toggle menu
  const toggleMenu = (event) => {
    event.preventDefault();
    setMenuOpen(!menuOpen);
  };

  // Handle scrolling class for the navbar
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [copyrightPosition, setCopyrightPosition] = useState({ x: 0, y: 0 });

  const handleMouseMoveCopyright = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setCopyrightPosition({ x, y });
  };

  const handleMouseLeaveCopyright = () => {
    setCopyrightPosition({ x: 0, y: 0 });
  };

  const [hoverPositions, setHoverPositions] = useState({});

  const handleMouseMove = (e, index) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setHoverPositions((prevPositions) => ({
      ...prevPositions,
      [index]: { x, y }
    }));
  };

  const handleMouseLeave = (index) => {
    setHoverPositions((prevPositions) => ({
      ...prevPositions,
      [index]: { x: 0, y: 0 }
    }));
  };

  // Function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className={`navbar ${menuOpen ? "menu-open" : ""}`}>
        <p className="copyright"
          onMouseMove={handleMouseMoveCopyright}
          onMouseLeave={handleMouseLeaveCopyright}
          style={{
            transform: `translate(${copyrightPosition.x * 0.1}px, ${copyrightPosition.y * 0.1}px)`,
            transition: "transform 0.1s ease-out"
          }}
        >
          <Link to="/" onClick={() => setMenuOpen(false)}></Link>
        </p>

        <nav className={menuOpen ? "open" : ""}>
          <ul className={menuOpen ? "open" : ""}>
            {["Work", "About", "Contact"].map((item, index) => {
              const path = `/${item.toLowerCase()}`;
              return (
                <li
                  key={index}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  className={isActive(path) ? "active-link" : ""}
                  style={{
                    transform: hoverPositions[index]
                      ? `translate(${hoverPositions[index].x * 0.05}px, ${hoverPositions[index].y * 0.05}px)`
                      : "translate(0, 0)",
                    transition: "transform 0.1s ease-out"
                  }}
                >
                  <Link to={path} onClick={() => setMenuOpen(false)}>
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="menu-icon">
          {!menuOpen ? (
            <a href="#" className="menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </a>
          ) : (
            <a href="#" className="exit" onClick={toggleMenu}>
              <i className="ri-close-line"></i>
            </a>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
