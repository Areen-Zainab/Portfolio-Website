import "../styles/Experience.css"; 
export default function Experience() {
  const experiences = [
    {
      id: "ta-automata",
      title: "Teaching Assistant - Automata",
      company: "University",
      duration: "Jan 2025 - May 2025",
      description: "Assisting students with automata theory, formal languages, and computational models.",
      type: "academic"
    },
    {
      id: "freelancer",
      title: "Freelancer",
      company: "Independent",
      duration: "Mar 2024 - Present",
      description: "Full-stack web development using React and Node.js.",
      type: "freelance"
    },
    {
      id: "blockchain-intern",
      title: "Blockchain Intern",
      company: "Genesis IT Lab",
      duration: "May 2024 - Aug 2024",
      description: "Worked on DeFi platforms and Web3 features.",
      type: "internship"
    },
    {
      id: "web-dev-intern",
      title: "Web Developer Intern",
      company: "Genesis IT Lab",
      duration: "Mar 2024 - May 2024",
      description: "Coded responsive front-end layouts with HTML/CSS/JS.",
      type: "internship"
    }
  ];

  const getColorClass = (type) => {
    const map = {
      academic: "blue",
      freelance: "green",
      internship: "purple",
      job: "orange"
    };
    return map[type] || "gray";
  };

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-header">
          <h2>Experience</h2>
          <p>My professional journey</p>
        </div>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className={`timeline-dot ${getColorClass(exp.type)}`}></div>
              <div className={`timeline-content ${index % 2 === 0 ? "left" : "right"}`}>
                <div className="experience-card">
                  <h3>{exp.title}</h3>
                  <p className="company">{exp.company} • {exp.duration}</p>
                  <p className="desc">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
