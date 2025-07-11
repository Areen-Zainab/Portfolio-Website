import "../styles/Contact.css"; 
import { Mail, Phone, Linkedin } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="contact-icon" />,
      label: "Email",
      value: "areenzainab66@gmail.com",
      href: "mailto:areenzainab66@gmail.com",
      bgColor: "blue"
    },
    {
      icon: <Phone className="contact-icon" />,
      label: "Phone",
      value: "0344 5020990",
      href: "tel:+923445020990",
      bgColor: "green"
    },
    {
      icon: <Linkedin className="contact-icon" />,
      label: "LinkedIn",
      value: "View Profile",
      href: "https://www.linkedin.com/in/areen-zainab-470849250/",
      bgColor: "blue"
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>I'm always open to discussing new opportunities and interesting projects</p>
        </div>
        <div className="contact-grid">
          {contactInfo.map((contact, index) => (
            <div key={index} className="contact-card">
              <div className={`contact-circle ${contact.bgColor}`}>
                {contact.icon}
              </div>
              <h3>{contact.label}</h3>
              <a
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                {contact.value}
              </a>
            </div>
          ))}
        </div>
        <div className="contact-button">
          <a href="mailto:areenzainab66@gmail.com" className="contact-cta">
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
}
