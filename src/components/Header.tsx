import './Header.css';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <span className="logo-text">&lt;Dev/&gt;</span>
          </div>
          
          <ul className="nav-links">
            <li>
              <button onClick={() => scrollToSection('hero')} className="nav-link">
                Início
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')} className="nav-link">
                Sobre
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('skills')} className="nav-link">
                Habilidades
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')} className="nav-link">
                Projetos
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('experience')} className="nav-link">
                Experiência
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="nav-link">
                Contato
              </button>
            </li>
          </ul>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
