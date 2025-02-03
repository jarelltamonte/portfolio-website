import me from "../images/aboutt.jpeg"
import "../Style/About.css"
import {useState, useEffect} from "react"

const About = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [educPosition, setEducPosition] = useState({ x: 0, y: 0 });
  const [c1Position, setC1Position] = useState({ x: 0, y: 0 });
  const [c2Position, setC2Position] = useState({ x: 0, y: 0 });
  const [c3Position, setC3Position] = useState({ x: 0, y: 0 });
  const [c4Position, setC4Position] = useState({ x: 0, y: 0 });
  const [s1Position, setS1Position] = useState({ x: 0, y: 0 });
  const [s2Position, setS2Position] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, setPosition) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPosition({ x, y });
  };

  const handleMouseLeave = (setPosition) => {
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    document.title = "About - Jarell Tamonte";
  }, []);

  return (
    <>
     <div className="first-section">
        <div className="square"></div>
        <div className="container">
          <div className="about-app">
            <div className="about-me-photo">
            <img src={me} alt="Jarell" className="about-profile-pic"
            onMouseMove={(e) => handleMouseMove(e, setPosition)}
            onMouseLeave={() => handleMouseLeave(setPosition)}
            style={{
              transform: `translate(${position.x * 0.1}px, ${position.y * 0.1}px)`,
              transition: "transform 0.1s ease-out",
            }}/>
            </div>
            <div className="about-me-info">
              <p className="about-text">About</p>
              <div className="line"></div>
              <p className="about-me-detail">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium animi aperiam rem modi iusto repellendus dolor
                perspiciatis saepe, laboriosam cupiditate mollitia corporis
                cum, aliquid nam cumque aliquam totam accusamus enim. 
                <span></span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium animi aperiam rem modi iusto repellendus dolor
                perspiciatis saepe, laboriosam cupiditate mollitia corporis
                cum, aliquid nam cumque aliquam totam accusamus enim. 
                <span></span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium animi aperiam rem modi iusto repellendus dolor
                perspiciatis saepe, laboriosam cupiditate mollitia corporis
                cum, aliquid nam cumque aliquam totam accusamus enim. 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-second-section">
        <div className="about-outer">
          <p className="education"
            onMouseMove={(e) => handleMouseMove(e, setEducPosition)}
            onMouseLeave={() => handleMouseLeave(setEducPosition)}
            style={{
              transform: `translate(${educPosition.x * 0.1}px, ${educPosition.y * 0.1}px)`,
              transition: "transform 0.1s ease-out",
            }}>Education</p>
          <div className="card-line line-block"></div>
          <div className="card-layer">
            <div className="card block"
              onMouseMove={(e) => handleMouseMove(e, setC1Position)}
              onMouseLeave={() => handleMouseLeave(setC1Position)}
              style={{
                transform: `translate(${c1Position.x * 0.1}px, ${c1Position.y * 0.1}px)`,
                transition: "transform 0.1s ease-out",
              }}>
              <p className="school">Catagtaguen NHS</p>
              <p className="school-year">2016-2020</p>
              <p className="award">Class Salutatorian <br/>(JHS)</p>
            </div>
            <div className="card block"
              onMouseMove={(e) => handleMouseMove(e, setC2Position)}
              onMouseLeave={() => handleMouseLeave(setC2Position)}
              style={{
                transform: `translate(${c2Position.x * 0.1}px, ${c2Position.y * 0.1}px)`,
                transition: "transform 0.1s ease-out",
              }}>
              <p className="school">STI College Laoag</p>
              <p className="school-year">2020-2022</p>
              <p className="award">Class Salutatorian (SHS)</p>
            </div>
            <div className="card block"
              onMouseMove={(e) => handleMouseMove(e, setC3Position)}
              onMouseLeave={() => handleMouseLeave(setC3Position)}
              style={{
                transform: `translate(${c3Position.x * 0.1}px, ${c3Position.y * 0.1}px)`,
                transition: "transform 0.1s ease-out",
              }}>
              <p className="school">CIIT</p>
              <p className="school-year">2022-Present</p>
              <p className="award">Computer Science Student</p>
            </div>
            <div className="card block"
              onMouseMove={(e) => handleMouseMove(e, setC4Position)}
              onMouseLeave={() => handleMouseLeave(setC4Position)}
              style={{
                transform: `translate(${c4Position.x * 0.1}px, ${c4Position.y * 0.1}px)`,
                transition: "transform 0.1s ease-out",
              }}>
              <p className="school">DataCamp</p>
              <p className="school-year">2024-2025</p>
              <p className="award">Data Science Student</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-third-section">
        <div className="skills-overview">
          <p className="text-overview">Skills Overview</p>
            <div className="the-skills">
              <div className="soft-skill">
                <p className="sub-title"
                  onMouseMove={(e) => handleMouseMove(e, setS1Position)}
                  onMouseLeave={() => handleMouseLeave(setS1Position)}
                  style={{
                    transform: `translate(${s1Position.x * 0.1}px, ${s1Position.y * 0.1}px)`,
                    transition: "transform 0.1s ease-out",
                  }}>Soft Skills</p>
              </div>
              <div className="technical-skill">
                <p className="sub-title"
                onMouseMove={(e) => handleMouseMove(e, setS2Position)}
                onMouseLeave={() => handleMouseLeave(setS2Position)}
                style={{
                  transform: `translate(${s2Position.x * 0.1}px, ${s2Position.y * 0.1}px)`,
                  transition: "transform 0.1s ease-out",
                }}>Technical Skills</p>
              </div>
            </div>
          </div>
            
      </div>
    </>
     
  )
}

export default About;