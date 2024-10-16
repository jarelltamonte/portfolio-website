const Projects = () => {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>Hi, I am <span className="name">Jarell</span></h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aperiam rem modi iusto repellendus dolor perspiciatis saepe, laboriosam cupiditate mollitia corporis cum, aliquid nam cumque aliquam totam accusamus enim.</p>
              <button type="button" className="downloadButton">Download CV</button>
            </div>
            <div className="col" id="imagebord">
              <span className="extratext" id="greetings1">Nice to meet you!</span>
              <span className="extratext" id="clickme">Click the image to get to know me!</span>
              <span className="extratext" id="greetings2">Greetings!</span>
            </div>
          </div>
  
          <div className="marquee">
            <h1>
              <div className="marquee-wrapper">
                <div className="marquee-title"><span className="text-stroke-black">SOFTWARE ENGINEER</span> AND <span className="text-stroke-black">DATA SCIENTIST</span> AND</div>
              </div>
              <div className="marquee-wrapper">
                <div className="marquee-title"><span className="text-stroke-black">SOFTWARE ENGINEER</span> AND <span className="text-stroke-black">DATA SCIENTIST</span> AND</div>
              </div>
            </h1>
          </div>
        </div>
      </div>
    );
  }
  
  export default Projects;
  