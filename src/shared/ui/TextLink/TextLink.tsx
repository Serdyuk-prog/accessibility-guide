import { Link } from 'react-router';
import './TextLink.css';

interface ITextLinkProps {
  children: React.ReactNode;
  href: string;
  isExternal?: boolean;
}

export const TextLink = ({ children, href, isExternal }: ITextLinkProps) => {
  if (isExternal) {
    return (
      <a href={href} className="text-link">
        {children}
      </a>
    );
  }
  return (
    <Link to={href} className="text-link">
      {children}
    </Link>
  );
};
