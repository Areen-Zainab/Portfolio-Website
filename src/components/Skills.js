import "../styles/Skills.css"; 
import { Code, Globe, Database, Settings } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      icon: <Code className="icon" />,
      skills: ["C++", "Java", "C", "C#", "Python", "SQL", "Assembly", "Git"]
    },
    {
      category: "Web Development",
      icon: <Globe className="icon" />,
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.js", "Node.js", "Next.js", "Express.js", "Angular", "Postman"]
    },
    {
      category: "Databases",
      icon: <Database className="icon" />,
      skills: ["MySQL", "Oracle", "MongoDB", "SQL"]
    },
    {
      category: "Tools & Skills",
      icon: <Settings className="icon" />,
      skills: ["Git", "Postman", "Figma", "Canva", "Leadership", "Teamwork", "Problem Solving", "Critical Thinking"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2>Skills & Technologies</h2>
          <p>A comprehensive overview of my technical skills and expertise</p>
        </div>
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="skills-card">
              <div className="skills-title">
                {group.icon}
                <span>{group.category}</span>
              </div>
              <div className="skills-tags">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
