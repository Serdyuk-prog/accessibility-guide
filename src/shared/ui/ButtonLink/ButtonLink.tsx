import { Link } from 'react-router';
import './ButtonLink.css';

interface IButtonLinkProps {
  children: React.ReactNode;
  href: string;
  type?: 'primary' | 'secondary' | 'accent';
}

export const ButtonLink = ({
  children,
  href,
  type = 'primary',
}: IButtonLinkProps) => {
  return (
    <Link
      to={href}
      className={`button-link button-link-${type}`}
    >
      {children}
    </Link>
  );
};
