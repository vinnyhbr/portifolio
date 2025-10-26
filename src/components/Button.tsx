import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  href?: string;
  className?: string;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick,
  href,
  className = ''
}: ButtonProps) => {
  const classNames = `btn btn-${variant} btn-${size} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className={classNames}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  );
};

export default Button;
