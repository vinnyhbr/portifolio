import Card from '../components/Card';
import { experiences } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Experiência Profissional</h2>
        
        <div className="timeline">
          {experiences.map((exp) => (
            <Card key={exp.id} className="experience-card" hover={false}>
              <div className="experience-header">
                <div>
                  <h3 className="experience-position">{exp.position}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>
              
              <ul className="experience-description">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="experience-tech">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
