import { HiArrowDown } from 'react-icons/hi';
import Button from '../components/Button';
import { personalInfo, socialLinks } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Olá, eu sou</p>
            <h1 className="hero-name text-gradient">{personalInfo.name}</h1>
            <h2 className="hero-title">{personalInfo.title}</h2>
            <p className="hero-description">{personalInfo.bio}</p>
            
            <div className="hero-buttons">
              <Button onClick={scrollToAbout} size="large">
                Ver Projetos
              </Button>
              <Button 
                variant="outline" 
                size="large"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Entre em Contato
              </Button>
            </div>

            <div className="hero-social">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={link.name}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-text">VR</span>
              </div>
            </div>
          </div>
        </div>

        <button className="scroll-indicator" onClick={scrollToAbout} aria-label="Scroll to about section">
          <HiArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
