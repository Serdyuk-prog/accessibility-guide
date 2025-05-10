import './Button.css';

interface IButtonProps {
  children: React.ReactNode;
  type?: 'primary' | 'secondary' | 'accent';
  onClick?: () => void;
}

export const Button = ({
  children,
  type = 'primary',
  onClick,
}: IButtonProps) => {
  return (
    <button type="button" onClick={onClick} className={`button button-${type}`}>
      {children}
    </button>
  );
};
