import Card from '../components/Card';
import { personalInfo } from '../data/portfolioData';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>
        
        <div className="about-content">
          <Card>
            <div className="about-text">
              <p>
                Sou estudante de Ciência da Computação (6º período na UNIFG) e atualmente 
                estagiário de desenvolvimento de software no Bradesco. Tenho experiência 
                prévia com backend em Java e Spring Boot, microserviços, integração de APIs 
                e arquitetura em nuvem.
              </p>
              <p>
                Minha stack principal inclui: Java | Spring Boot | REST API | Microservices | 
                Docker | MongoDB | PostgreSQL | JWT | Git | CI/CD | Azure. Tenho experiência 
                prática em desenvolvimento backend, trabalhando com microsserviços e cloud 
                computing em ambientes corporativos.
              </p>
              <p>
                Busco consolidar minha trajetória na engenharia de software, focando em 
                desenvolvimento backend e arquitetura de sistemas escaláveis. Possuo 
                certificações em Oracle Database, Kotlin, metodologias ágeis e contribuição 
                em projetos open source.
              </p>
              
              <div className="about-info">
                <div className="info-item">
                  <strong>Localização:</strong>
                  <span>{personalInfo.location}</span>
                </div>
                <div className="info-item">
                  <strong>Email:</strong>
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </div>
                <div className="info-item">
                  <strong>Formação:</strong>
                  <span>Ciência da Computação - UNIFG (6º período)</span>
                </div>
                <div className="info-item">
                  <strong>Idiomas:</strong>
                  <span>Português (Nativo), Inglês (B2)</span>
                </div>
                <div className="info-item">
                  <strong>Status:</strong>
                  <span className="status-badge">Estagiário no Bradesco</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
