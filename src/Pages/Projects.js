import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects=() => {
    const myProjects = [
        {id: 1, title: "Project 1", description: "My first project", website: "www.google.com", github: "www.github.com", image: "", tech: ["HTML", "CSS", "JS"]},
        {id: 2, title: "Project 2", description: "My 2 project", website: "www.google.com", github: "www.github.com", image: "", tech: ["HTML", "CSS", "JS"]},
        {id: 3, title: "Project 3", description: "My 3 project", website: "www.google.com", github: "www.github.com", image: "", tech: ["HTML", "CSS", "JS"]},
        {id: 4, title: "Project 4", description: "My 4 project", website: "www.google.com", github: "www.github.com", image: "", tech: ["HTML", "CSS", "JS"]},
        {id: 5, title: "Project 5", description: "My 5 project", website: "www.google.com", github: "www.github.com", image: "", tech: ["HTML", "CSS", "JS"]},
        {id: 6, title: "Project 6", description: "My 6 project", website: "www.google.com", github: "www.github.com", image: "", tech: ["HTML", "CSS", "JS"]},
    ]
    return (
        <section>
            <h2>
                Projects
            </h2>
            <div>
              {myProjects.map((project) => (
                 <ProjectCard key={project.id} title={project.title} />
              ))}
            </div>
        </section>
    )
}
export default Projects

//pics 