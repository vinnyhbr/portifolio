import { socialLinks } from '../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-social">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={link.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
          
          <p className="footer-text">
            © {currentYear} Vinicius Rosa de Lima. Todos os direitos reservados.
          </p>
          
          <p className="footer-subtext">
            Desenvolvido com React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
