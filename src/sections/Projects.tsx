import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Card from '../components/Card';
import Button from '../components/Button';
import { projects } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Projetos em Destaque</h2>
        
        {featuredProjects.length > 0 && (
          <div className="projects-featured">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="project-card-featured">
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    {project.githubUrl && (
                      <Button variant="outline" size="small" href={project.githubUrl}>
                        <FaGithub /> Código
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button size="small" href={project.liveUrl}>
                        <FaExternalLinkAlt /> Demo
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {otherProjects.length > 0 && (
          <>
            <h3 className="section-subtitle">Outros Projetos</h3>
            <div className="projects-grid">
              {otherProjects.map((project) => (
                <Card key={project.id} className="project-card">
                  <h4 className="project-title-small">{project.title}</h4>
                  <p className="project-description-small">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge-small">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-links-small">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaExternalLinkAlt size={18} />
                      </a>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
