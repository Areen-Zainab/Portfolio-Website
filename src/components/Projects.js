import "../styles/Projects.css"; 
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: "worksphere",
      title: "Worksphere",
      description: "A task management & team collaboration tool.",
      technologies: ["Spring Boot", "React", "MySQL"],
      image: "images/project11.png",
      githubUrl: "https://github.com/Areen-Zainab/worksphere-web-app?tab=readme-ov-file",
      liveUrl: "https://worksphere-web-app.vercel.app/"
    },
    {
      id: "acadify",
      title: "Acadify",
      description: "A modern learning platform built with MERN.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      image: "images/project2.png",
      githubUrl: "https://github.com/hafsa-imtiaz/acadify-learning-platform",
      liveUrl: "https://acadify-learning.vercel.app/"
    },
    {
      id: "gym-management",
      title: "GymManagement System",
      description: "Built with C# and MySQL for gym operations.",
      technologies: ["C#", "MySQL", ".NET"],
      image: "images/project3.jpg",
      githubUrl: "https://github.com/hafsa-imtiaz/FlexTrainer-desktop-app"
    },
    {
      id: "pacman-game",
      title: "Multi-Threaded Pacman Game",
      description: "Classic Pacman game with SFML and C++.",
      technologies: ["C++", "SFML", "Multi-threading"],
      image: "images/project4.png",
      githubUrl: "https://github.com/Areen-Zainab/Multi-threaded-Pacman"
    },
    {
      id: "TORCS",
      title: "TORCS python client",
      description: "Real-time telemetry data collection from TORCS.Storage of relevant vehicle and track data for analysis.",
      technologies: ["python"],
      image: "images/project5.png",
      githubUrl: "https://github.com/hafsa-imtiaz/torcs-python-client"
    },
    {
      id: "lost",
      title: "Lost and Found web app",
      description: "This system is a Spring Boot + Java + MySQL web application designed for managing lost and found items.",
      technologies: ["Java", "Javascript", "MySQL", "HTML", "CSS"],
      image: "images/project6.png",
      githubUrl: "https://github.com/hafsa-imtiaz/LostAndFound-web-app"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2>Featured Projects</h2>
          <p>Some recent projects showcasing full-stack, game dev, and system design.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} className="live-link">
                      <ExternalLink size={16} /> View Project
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="github-link">
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
