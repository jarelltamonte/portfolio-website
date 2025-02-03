import "../Style/Home.css";
import me from "../images/Jarell Tamonte.jpg";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {items} from "./projectsData"


const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [resumePosition, setResumePosition] = useState({ x: 0, y: 0 });
  const [workPosition, setWorkPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, setPosition) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPosition({ x, y });
  };

  const handleMouseLeave = (setPosition) => {
    setPosition({ x: 0, y: 0 });
  };
  
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skill1Ref = useRef(null);
  const skill2Ref = useRef(null);
  const skill3Ref = useRef(null);
  const skill4Ref = useRef(null);
  const skill5Ref = useRef(null);

  
  useEffect(() => {
    const typed1 = new Typed(skill1Ref.current, {
      strings: ["Mobile App Developer", "Backend Developer", "React Enthusiast"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    const typed2 = new Typed(skill2Ref.current, {
      strings: ["Graphic Designer", "UI/UX Specialist", "Branding Expert"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    const typed3 = new Typed(skill3Ref.current, {
      strings: ["Web Developer", "Frontend Developer", "Full Stack Developer"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    const typed4 = new Typed(skill4Ref.current, {
      strings: ["Data Scientist", "Frontend Developer", "Full Stack Developer"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    const typed5 = new Typed(skill5Ref.current, {
      strings: ["Data Scientist", "Frontend Developer", "Full Stack Developer"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed1.destroy();
      typed2.destroy();
      typed3.destroy();
      typed4.destroy();
      typed5.destroy();
    };
  }, []);


  return (
    <>
      <div className="first-section">
        <div
          className="circle"
          style={{
            transform: `translateY(${scrollY * -0.2}px) scale(${
              1 - scrollY * 0.001
            })`,
          }}
        ></div>
        <div className="container">
          <div className="app">
            <div className="row">
              <div className="left-side">
                <img src={me} alt="Jarell" className="small-pic" />
                <span className="gen-skill" ref={skill5Ref}></span>
                <p className="hi">Hi, I am</p>
                <p className="jarell">Jarell Tamonté</p>
                <p className="brief-info">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium animi aperiam rem modi iusto repellendus dolor
                  perspiciatis saepe, laboriosam cupiditate mollitia corporis
                  cum, aliquid nam cumque aliquam totam accusamus enim.
                </p>
                <button type="button" className="downloadButton" 
                  onMouseMove={(e) => handleMouseMove(e, setResumePosition)}
                  onMouseLeave={() => handleMouseLeave(setResumePosition)}
                  onClick={() => {
                    document.title = "Viewing Resumé..."; 
                    window.open(require("../cv/Jarell Tamonte CV.pdf"), "_blank"); 
                    setTimeout(() => {
                      document.title = "Jarell Tamonte · Portfolio"; 
                    }, 2000);
                  }}
                  style={{
                    transform: `translate(${resumePosition.x * 0.1}px, ${resumePosition.y * 0.1}px)`,
                    transition: "transform 0.1s ease-out",
                  }}>
                  Resumé <BsBoxArrowUpRight style={{ marginLeft: "6px" }} />
                </button>
              </div>

              <div className="right-side" id="right-side">
                <div className="profile-pic-container">
                  <img src={me} alt="Jarell" className="profile-pic" />
                  <span className="skill-text skill-1" ref={skill1Ref}></span>
                  <span className="skill-text skill-2" ref={skill2Ref}></span>
                  <span className="skill-text skill-3" ref={skill3Ref}></span>
                  <span className="skill-text skill-4" ref={skill4Ref}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second-section">
        <div className="about-content">
        <Link to="/about">
          <div className="circle-about show-cont" 
            onMouseMove={(e) => handleMouseMove(e, setPosition)}
            onMouseLeave={() => handleMouseLeave(setPosition)}
            style={{
              transform: `translate(${position.x * 0.1}px, ${position.y * 0.1}px)`,
              transition: "transform 0.1s ease-out",
            }}>
            <span className="about-circle-text"></span>
          </div>
        </Link>
          <div className="vertical-line show-cont" ></div> {/* The vertical line */}
          <div className="about-text">
            <p className="home-text-about show-cont">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
              animi aperiam rem modi iusto repellendus dolor perspiciatis saepe.
            </p>
          </div>
        </div>
      </div>

      <div className="third-section">
        <p className="gallery">Projects Gallery</p>
        <div className="third-first">
          {items.slice(0, 4).map((item, idx) => (
            <div key={`card-${idx}`} className="card-home">
              <div className="card-image">
                <img src={item.image[0]} alt={`Project ${idx + 1}`} className="card-img" />
              </div>
            </div>
          ))}
        </div>
        <div className="third-second">
          {items.slice(4, 8).map((item, idx) => (
            <div key={`card-2-${idx}`} className="card-home">
              <div className="card-image">
                <img src={item.image[0]} alt={`Project ${idx + 5}`} className="card-img" />
              </div>
            </div>
          ))}
        </div>
        <Link to="/work" className="more-work">
          <button
            type="button"
            className="workButton"
            onMouseMove={(e) => handleMouseMove(e, setWorkPosition)}
            onMouseLeave={() => handleMouseLeave(setWorkPosition)}
            style={{
              transform: `translate(${workPosition.x * 0.1}px, ${workPosition.y * 0.1}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            More work <BsBoxArrowUpRight style={{ marginLeft: "6px" }} />
          </button>
        </Link>
      </div>`

    </>
  );
};

export default Home;
