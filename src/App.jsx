import "./App.css";
import Particles from "./reactbits/Particles";
import About from "./components/About";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="particles-container">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="parent-container">
        <div className="container-left">
          <div className="about-me">
            <h1>Christian Daryl Curay</h1>
            <h2>Software Developer</h2>
            <p>adahsdhs</p>
            <div className="navbar">
              <div>
                <ul>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#experience">Experience</a>
                  </li>
                  <li>
                    <a href="#project">Projects</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="socials">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/cdcuray/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/christiancuray"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/1christiand/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-right">
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
