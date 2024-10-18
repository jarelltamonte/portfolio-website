import React, { useState, useEffect } from 'react'; 
import "../Style/Contact.css";
import { GoArrowDownRight } from "react-icons/go";
import me from "../images/Jarell Tamonte.jpg"

const Contact = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); 

    return () => clearInterval(timer); 
  }, []);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mailPosition, setMailPosition] = useState({ x: 0, y: 0 });
  const [phonePosition, setPhonePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, setPosition) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPosition({ x, y });
  };

  const handleMouseLeave = (setPosition) => {
    setPosition({ x: 0, y: 0 });
  };
  

  return (
    <>
      <div className="contact-first-section">
        <div className="container">
          <div className="contact-app">
            <div className="send-message">
              <form className="form-area">
              <img src={me} alt="Jarell" className="compact-pic" />
                <p className="work-intro">Let's start a project together</p>
                <div className="form-field">
                  <label htmlFor="name" className="form-label"><span className="number">01 </span>What's your name?</label>
                  <input type="text" id="name" className="form-input" placeholder="John Doe" />
                </div>

                <div className="form-field">
                  <label htmlFor="email" className="form-label"><span className="number">02 </span>What's your email?</label>
                  <input type="email" id="email" className="form-input" placeholder="john@doe.com" />
                </div>

                <div className="form-field">
                  <label htmlFor="message" className="form-label"><span className="number">03 </span>Your message</label>
                  <textarea type="text" id="message" className="form-input form-textarea" rows="5" placeholder="Hi Jarell, can you help me with..." />
                  <button type="submit" className="form-button"
                    onMouseMove={(e) => handleMouseMove(e, setPosition)}
                    onMouseLeave={() => handleMouseLeave(setPosition)}
                    onClick={() => alert("This website is intended for commercial use only. Look for my contact details on the right")}
                    style={{
                    transform: `translate(${position.x * 0.1}px, ${position.y * 0.1}px)`,
                    transition: "transform 0.1s ease-out",
                  }}><span className="send-circle-text"></span></button>
                </div>

                
              </form>
            </div>
            <div className="contact-details">
              <GoArrowDownRight className="arrow-down"/>
              <img src={me} alt="Jarell" className="contact-pic" />
              <div className="first-deet">
                <p className="contact-text">CONTACT DETAILS</p>
                <p className="contact-deet"
                  onMouseMove={(e) => handleMouseMove(e, setPhonePosition)}
                  onMouseLeave={() => handleMouseLeave(setPhonePosition)}
                  style={{
                    transform: `translate(${phonePosition.x * 0.1}px, ${phonePosition.y * 0.1}px)`,
                    transition: "transform 0.1s ease-out",
                  }}>+63 938 456 5033</p>
                <p className="contact-deet email"
                  onMouseMove={(e) => handleMouseMove(e, setMailPosition)}
                  onMouseLeave={() => handleMouseLeave(setMailPosition)}
                  style={{
                    transform: `translate(${mailPosition.x * 0.1}px, ${mailPosition.y * 0.1}px)`,
                    transition: "transform 0.1s ease-out",
                  }}>
                <a href="mailto:jarelltamonte@gmail.com">jarelltamonte@gmail.com</a>
              </p>
              </div>
              <div className='second-deet'>
                <p className="contact-text location">LOCATION</p>
                <p className="contact-deet place">Quezon City, Metro Manila, Philippines</p>
              </div>
              <div className="third-deet">
                <p className="contact-text time">LOCAL TIME AND DATE</p>
                <p className="contact-deet">{currentTime.toLocaleTimeString()}</p>  
                <p className="contact-deet">{currentTime.toLocaleDateString()}</p>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
