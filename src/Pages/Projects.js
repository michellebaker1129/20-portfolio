import React from "react";

import ProjectCard from "../components/ProjectCard";
import ProjectOneImg from '../assets/social-media-routes.jpg';
import ProjectTwoImg from '../assets/regex-tutorial.jpg';
import ProjectThreeImg from '../assets/e-commerce-back-end.jpg';
import ProjectFourImg from '../assets/note-taker-2.jpg';
import ProjectFiveImg from '../assets/logo-generator.jpg';
import ProjectSixImg from '../assets/readme-generator.jpg';

import "./style.css";

const Projects = () => {
  const myProjects = [
    {
      id: 1,
      title: "Social Media API",
      description: "Social Media API built with Express.js, MongoDB, and Mongoose",
      website: "https://watch.screencastify.com/v/OnxSwAfSuFTeqSMrQQJj",
      github: "https://github.com/michellebaker1129/18-social-media",
      image: ProjectOneImg,
      tech: ["Node", "Express", "MongoDB", "Mongoose", "Insomnia"],
    },
    {
      id: 2,
      title: "Regex Tutorial",
      description: "This pattern is used to validate a strong password",
      website: "https://gist.github.com/michellebaker1129/f887c37f07510a888bd7931d809d1240",
      github: "https://gist.github.com/michellebaker1129/f887c37f07510a888bd7931d809d1240",
      image: ProjectTwoImg,
      tech: ["Regex"],
    },
    {
      id: 3,
      title: "E-Commerce Back End",
      description: "Back end for an e-commerce website",
      website: "https://watch.screencastify.com/v/mCHjnfv0HEKCTFN070OA",
      github: "https://github.com/michellebaker1129/13-e-commerce-back-end",
      image: ProjectThreeImg,
      tech: ["MySQL", "Sequelize", "Node", "Express", "Dotenv"],
    },
    {
      id: 4,
      title: "Note Taker",
      description: "App to write and save notes",
      website: "https://sheltered-sierra-40668.herokuapp.com/notes",
      github: "https://github.com/michellebaker1129/11-notes-app",
      image: ProjectFourImg,
      tech: ["Node", "Express", "JS"],
    },
    {
      id: 5,
      title: "Logo Generator",
      description: "Create an SVG logo for your business",
      website: "https://watch.screencastify.com/v/sBGGkAEPsGWo6H1MF74L",
      github: "https://github.com/michellebaker1129/10-logo-generator",
      image: ProjectFiveImg,
      tech: ["CLI", "SVG", "Node", "Inquirer"],
    },
    {
      id: 6,
      title: "README Generator",
      description: "A quick way to create and organize my README files",
      website: "https://watch.screencastify.com/v/94FnWYZpN5taYkgnTbHp",
      github: "https://github.com/michellebaker1129",
      image: ProjectSixImg,
      tech: ["Markdown", "Node", "CLI", "Inquirer"],
    },
  ];
  return (
    <section>
      <h2>Projects</h2>
      <div className="project-cards">
        {myProjects.map((project) => (
            <ProjectCard
                key={project.id}
                project={project}
            />
        ))}
      </div>
    </section>
  );
};
export default Projects;

//pics
