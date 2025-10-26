import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Card from '../components/Card';
import { personalInfo, socialLinks } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
        
        <div className="contact-content">
          <Card className="contact-card">
            <p className="contact-description">
              Estou sempre aberto a discutir novos projetos, ideias criativas ou 
              oportunidades para fazer parte de sua equipe. Sinta-se à vontade 
              para entrar em contato!
            </p>
            
            <div className="contact-info">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="contact-item"
              >
                <FaEnvelope size={24} />
                <div>
                  <strong>Email</strong>
                  <span>{personalInfo.email}</span>
                </div>
              </a>

              <a 
                href={socialLinks.find(link => link.name === 'LinkedIn')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <FaLinkedin size={24} />
                <div>
                  <strong>LinkedIn</strong>
                  <span>Vinicius Rosa de Lima</span>
                </div>
              </a>

              <a 
                href={socialLinks.find(link => link.name === 'GitHub')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <FaGithub size={24} />
                <div>
                  <strong>GitHub</strong>
                  <span>@viniciusrosa</span>
                </div>
              </a>
            </div>

            <div className="contact-location">
              <p><strong>Localização:</strong> {personalInfo.location}</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
