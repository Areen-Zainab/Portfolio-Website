import "../styles/Education.css"; 
import { GraduationCap, School } from "lucide-react";

export default function Education() {
  const education = [
    {
      id: "university",
      degree: "Bachelor of Science in Computer Science",
      institution: "National University of Computer and Emerging Sciences, Islamabad",
      duration: "Aug 2022 - Present",
      location: "Islamabad, Pakistan"
    },
    {
      id: "college",
      degree: "FSc Pre-Medical with Additional Math",
      institution: "Punjab Group of Schools and Colleges, Sargodha",
      duration: "Apr 2019 - Mar 2021",
      location: "Sargodha, Pakistan"
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="education-header">
          <h2>Education</h2>
          <p>My academic background and qualifications</p>
        </div>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={edu.id} className="education-card">
              <div className="education-icon">
                {index === 0 ? (
                  <GraduationCap className="icon" />
                ) : (
                  <School className="icon" />
                )}
                <h3>{edu.degree}</h3>
              </div>
              <p className="institution">{edu.institution}</p>
              <p className="duration">{edu.duration}</p>
              <p className="location">{edu.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
