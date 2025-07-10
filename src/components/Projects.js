import "../styles/Projects.css"; 
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: "worksphere",
      title: "Worksphere",
      description: "A task management & team collaboration tool.",
      technologies: ["Spring Boot", "React", "MySQL"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&h=600",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: "acadify",
      title: "Acadify",
      description: "A modern learning platform built with MERN.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&h=600",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: "gym-management",
      title: "GymManagement System",
      description: "Built with C# and MySQL for gym operations.",
      technologies: ["C#", "MySQL", ".NET"],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&h=600",
      githubUrl: "#"
    },
    {
      id: "pacman-game",
      title: "Multi-Threaded Pacman Game",
      description: "Classic Pacman game with SFML and C++.",
      technologies: ["C++", "SFML", "Multi-threading"],
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=1200&h=600",
      githubUrl: "#"
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
