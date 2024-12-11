import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import './about.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaCode, FaMobileAlt, FaDatabase, FaTools, FaProjectDiagram, FaGitAlt } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <Header/>
    <div className="about-container">
      <h1 className="about-title">About Me</h1>

      <Accordion className="custom-accordion">
        
        {/* Who I Am Section */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Who I Am?</Accordion.Header>
          <Accordion.Body>
            Hi, I'm Tharushika Navodi, a recent graduate from the Sri Lanka Institute of Information Technology (SLIIT), where I earned my BSc (Hons) in Information Technology with a specialization in Software Engineering. I'm passionate about leveraging my skills in software development, project management, and quality assurance to create impactful software solutions. My journey in the tech world has cultivated a strong interest in crafting efficient code, leading projects, and ensuring the highest standards in software quality. I'm driven by continuous learning and always excited to explore new technologies and challenges.
          </Accordion.Body>
        </Accordion.Item>

        {/* Educational Background Section */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Educational Background</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <strong>Bachelor of Science (Hons)</strong> in Information Technology, specializing in Software Engineering  
                <br />
                Sri Lanka Institute of Information Technology (SLIIT)  
                <br />
                <em>Graduated with a Higher Diploma in Information Technology (GPA: 3.2)</em>
              </li>
              <br />
              <li>
                <strong>Assured Diplomas</strong>
                <ul>
                  <li>Diploma in Information Technology (DITEC) - ESOFT Metro Campus</li>
                  <li>Diploma in English (DITEC) - ESOFT Metro Campus</li>
                </ul>
              </li>
              <br />
              <li>
                <strong>GCE Advanced Level (A/L)</strong> — Physical Science Stream (2019)  
                <br />
                St. Thomas' Girls' High School, Matara  
                <br />
                - Combined Mathematics: B  
                - Chemistry: C  
                - Physics: S  
              </li>
              <br />
              <li>
                <strong>GCE Ordinary Level (O/L)</strong> (2015)  
                <br />
                Narandeniya National College, Matara  
                <br />
                - Results: 8 A's, 1 C  
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        {/* Professional Experience Section */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>Professional Experience</Accordion.Header>
          <Accordion.Body>
          I have 6 months of experience as a <strong>Trainee Software Project Manager</strong>. I spearheaded the planning for the Aarudhra matrimony project, defining objectives, setting milestones, and creating timelines while collaborating with cross-functional teams to ensure smooth project execution. I conducted regular meetings to track progress and manage tasks, utilizing the ClickUp tool to assign and monitor tasks efficiently. Additionally, I delivered weekly presentations to clients to address changing requirements and ensure alignment with project goals. I designed user-friendly web interfaces using Figma and developed full-stack applications with React, Node.js, and MySQL. I managed version control through GitHub and conducted thorough manual testing, writing detailed test cases and test plans to ensure high application performance and reliability.
          </Accordion.Body>
        </Accordion.Item>

            {/* Technical Skills Section */}
    <Accordion.Item eventKey="3">
      <Accordion.Header>Technical Skills</Accordion.Header>
      <Accordion.Body>
        <h5>
          <FaCode style={{ color: "#c89116", marginRight: "8px" }} />
          Web Development
        </h5>
        <ul>
          <li>Java</li>
          <li>C++</li>
          <li>C</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>NestJS</li>
          <li>Angular</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Python</li>
        </ul>

        <h5>
          <FaMobileAlt style={{ color: "#c89116", marginRight: "8px" }} />
          Mobile Development
        </h5>
        <ul>
          <li>React Native</li>
          <li>Android (Java)</li>
        </ul>

        <h5>
          <FaDatabase style={{ color: "#c89116", marginRight: "8px" }} />
          Database
        </h5>
        <ul>
          <li>MySQL</li>
          <li>Firebase</li>
          <li>MongoDB</li>
        </ul>

        <h5>
          <FaTools style={{ color: "#c89116", marginRight: "8px" }} />
          Testing Tools and Frameworks
        </h5>
        <ul>
          <li>Postman</li>
          <li>Selenium WebDriver</li>
          <li>TestNG</li>
          <li>Jira</li>
          <li>Jenkins</li>
          <li>JUnit</li>
        </ul>

        <h5>
          <FaProjectDiagram style={{ color: "#c89116", marginRight: "8px" }} />
          Project Management Tools
        </h5>
        <ul>
          <li>Jira</li>
          <li>Microsoft Project</li>
          <li>ClickUp</li>
          <li>Miro</li>
        </ul>

        <h5>
          <FaGitAlt style={{ color: "#c89116", marginRight: "8px" }} />
          Version Control Systems
        </h5>
        <ul>
          <li>Git</li>
          <li>GitHub</li>
        </ul>
      </Accordion.Body>
    </Accordion.Item>

        {/* Passions & Interests Section */}
        <Accordion.Item eventKey="4">
          <Accordion.Header>Passions & Interests</Accordion.Header>
          <Accordion.Body>
            I'm deeply passionate about software development, project management, and quality assurance. I thrive on the challenge of creating efficient, reliable software solutions and constantly seek to expand my knowledge and skills in the tech industry. My interests include exploring the latest technology trends, coding innovative projects, and continuously learning to excel in my field.
          </Accordion.Body>
        </Accordion.Item>

        {/* Let's Connect Section */}
        <Accordion.Item eventKey="5">
          <Accordion.Header>Let's Connect</Accordion.Header>
          <Accordion.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Phone:</strong> +94 762466803
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Email:</strong> <a href="mailto:tharushikanavodi28@gmail.com">tharushikanavodi28@gmail.com</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>LinkedIn:</strong> <a href="http://www.linkedin.com/in/tharushika-n-859a77249" target="_blank" rel="noopener noreferrer">Tharushika Navodi</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Academic GitHub:</strong> <a href="https://github.com/IT20639662" target="_blank" rel="noopener noreferrer">Academic Profile</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Personal GitHub:</strong> <a href="https://github.com/NavodiPT" target="_blank" rel="noopener noreferrer">Personal Profile</a>
              </ListGroup.Item>

              <ListGroup.Item>
                <strong>Medium:</strong> <a href="https://medium.com/@tharushikanavodi28" target="_blank" rel="noopener noreferrer">Medium Profile</a>
              </ListGroup.Item>
            </ListGroup>
            <blockquote className="blockquote mt-4">
              <em>"Believe in continuous learning and strive for excellence in everything you do."</em>
            </blockquote>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

    </div>
    <Footer/>
    </div>
  );
};

export default About;
