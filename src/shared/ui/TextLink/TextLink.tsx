import { Link } from 'react-router';
import './TextLink.css';

interface ITextLinkProps {
  children: React.ReactNode;
  href: string;
  isExternal?: boolean;
  type?: 'primary' | 'secondary' | 'accent';
}

export const TextLink = ({ children, href, isExternal, type }: ITextLinkProps) => {
  if (isExternal) {
    return (
      <a href={href} target="_blank" className="text-link">
        {children}
      </a>
    );
  }
  return (
    <Link
      to={href}
      className={`text-link text-link-${type}`}
      onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}
    >
      {children}
    </Link>
  );
};
