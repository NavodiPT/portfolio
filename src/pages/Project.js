import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './project.css';

import elephant from '../img/elephant.jpg';
import food from '../img/food.jpg';
import waste from '../img/waste.jpg';
import herbal from '../img/herbal.jpg';
import energy from '../img/energy.jpg';
import pizza from '../img/pizza.jpg';
import Portfolio from '../img/portfolio.png';
import todo from '../img/todo.jpg';

export default function Project() {
  
  const projects = [
    {
      title: 'Elephant Incident Reporting System',
      description: 'A mobile application designed to manage HEC by allowing users to report elephant-related incidents.',
      technologies: ['React Native'],
      imgSrc: elephant,
      githubLink: 'https://github.com/IT20639662/Elephant-reporter-system.git',
    },
    {
      title: 'Online Food Ordering System',
      description: 'A system allowing users to order food online and have it delivered from restaurants.',
      technologies: ['ReactJS', 'NestJS', 'MongoDB', 'GitHub', 'MockFlow', 'Figma', 'Selenium'],
      imgSrc: food,
      githubLink: 'https://github.com/IT20639662/Food_Delivery.git',
    },
    {
      title: 'Waste Management System',
      description: 'A platform for managing waste and promoting recycling.',
      technologies: ['ReactJS', 'NodeJS', 'MongoDB','ExpressJs', 'GitHub', 'MockFlow', 'Figma', 'Azure Boards', 'Selenium', 'Postman'],
      imgSrc: waste,
      githubLink: 'https://github.com/IT20639662/UEE_Final-Project.git',
    },
    {
      title: 'Herbal Heal Shopping Platform',
      description: 'A shopping platform for herbal products with a cart system.',
      technologies: ['ReactJS', 'NodeJS', 'MongoDB','ExpressJs', 'GitHub', 'MockFlow', 'Figma', 'Selenium', 'Postman'],
      imgSrc: herbal,
      githubLink: 'https://github.com/Pabasaraa/HerbalHeal.git',
    },
    {
      title: 'EcoHub',
      description: 'A web application to explore energy-efficient home appliances and solar products.',
      technologies: ['ReactJS', 'NodeJS', 'MongoDB', 'ExpressJs','GitHub', 'MockFlow', 'Figma', 'Selenium', 'Postman'],
      imgSrc: energy,
      githubLink: 'https://github.com/Pabasaraa/EcoHub.git',
    },
    {
      title: 'Food Cafe',
      description: 'A café menu showcasing food and drink options.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub'],
      imgSrc: pizza,
      githubLink: 'https://github.com/IT20639662/Food-cafe.git',
    },
    {
      title: 'Portfolio',
      description: 'A personal portfolio website to showcase my skills and projects.',
      technologies: ['ReactJS','GitHub'],
      imgSrc: Portfolio,
      githubLink: 'https://github.com/NavodiPT/portfolio.git',
    },
    {
      title: 'To Do List',
      description: 'A simple and efficient To-Do List application designed to manage tasks effectively, featuring add, edit, and delete functionalities.',
      technologies: ['ReactJS', 'NodeJS', 'MongoDB', 'ExpressJs','GitHub'],
      imgSrc: todo,
      githubLink: 'https://github.com/NavodiPT/To-Do-List.gitt',
    },
  ];

  return (
    <>
      <Header />
      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Card className="project-card" key={index}>
              <Card.Img variant="top" src={project.imgSrc} alt={project.title} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div className="technologies-list">
                  <strong>Technologies Used:</strong>
                  <ul>
                    {project.technologies.map((tech, index) => (
                      <li key={index} className="tech-item">{tech}</li>
                    ))}
                  </ul>
                </div>
                <div className="button-container">
                  <Button
                    variant="primary"
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-button"
                  >
                    View on GitHub
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

