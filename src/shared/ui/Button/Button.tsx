import './Button.css';

interface IButtonProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  type?: 'primary' | 'secondary' | 'accent';
  ref?: React.RefObject<HTMLButtonElement>;
  onClick?: () => void;
}

export const Button = ({
  children,
  type = 'primary',
  onClick,
  ref,
  style,
}: IButtonProps) => {
  return (
    <button
      type="button"
      ref={ref}
      style={style}
      onClick={onClick}
      className={`button button-${type}`}
    >
      {children}
    </button>
  );
};
