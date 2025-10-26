import Card from '../components/Card';
import { skills } from '../data/portfolioData';
import './Skills.css';

const Skills = () => {
  const categories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools'),
    other: skills.filter(skill => skill.category === 'other'),
  };

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        
        <div className="skills-grid">
          {categories.frontend.length > 0 && (
            <Card>
              <h3 className="skill-category-title">Frontend</h3>
              <div className="skill-tags">
                {categories.frontend.map((skill) => (
                  <span key={skill.name} className="skill-tag">
                    {skill.name}
                  </span>
                ))}
              </div>
            </Card>
          )}

          {categories.backend.length > 0 && (
            <Card>
              <h3 className="skill-category-title">Backend</h3>
              <div className="skill-tags">
                {categories.backend.map((skill) => (
                  <span key={skill.name} className="skill-tag">
                    {skill.name}
                  </span>
                ))}
              </div>
            </Card>
          )}

          {categories.tools.length > 0 && (
            <Card>
              <h3 className="skill-category-title">Ferramentas</h3>
              <div className="skill-tags">
                {categories.tools.map((skill) => (
                  <span key={skill.name} className="skill-tag">
                    {skill.name}
                  </span>
                ))}
              </div>
            </Card>
          )}

          {categories.other.length > 0 && (
            <Card>
              <h3 className="skill-category-title">Outras</h3>
              <div className="skill-tags">
                {categories.other.map((skill) => (
                  <span key={skill.name} className="skill-tag">
                    {skill.name}
                  </span>
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
