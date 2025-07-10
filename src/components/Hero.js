import "../styles/Hero.css"; 
import { MapPin, GraduationCap } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-text">
            <div className="hero-image-mobile">
              <img
                src="/images/pfp.jpg"
                alt="Professional headshot"
                className="hero-img"
              />
              <div className="hero-availability">
                <div className="dot"></div>
                <span>Available for work</span>
              </div>
            </div>
            <h1 className="hero-title">Hi, I'm <span className="highlight">Areen Zainab</span></h1>
            <p className="hero-summary">
              Motivated Computer Science student with full-stack development experience. Passionate about team-based problem solving and creating impactful tech.
            </p>
            <div className="hero-buttons">
              <button onClick={() => scrollToSection("projects")} className="btn-primary">View My Work</button>
              <button onClick={() => scrollToSection("contact")} className="btn-secondary">Get In Touch</button>
            </div>
            <div className="hero-info">
              <div><MapPin size={16} /> Islamabad, Pakistan</div>
              <div><GraduationCap size={16} /> BS Computer Science</div>
            </div>
          </div>
          <div className="hero-image-desktop">
            <img
              src="/images/pfp.jpg"
              alt="Professional headshot"
              className="hero-img"
            />
            <div className="hero-availability">
              <div className="dot"></div>
              <span>Available for work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
