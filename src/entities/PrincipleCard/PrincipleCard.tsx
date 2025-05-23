import { InfoCard } from '@/shared/ui/InfoCard/InfoCard';
import { Emoji } from 'react-apple-emojis';
import './PrincipleCard.css';
import { Button } from '@/shared/ui/Button/Button';
import { ButtonLink } from '@/shared/ui/ButtonLink/ButtonLink';


interface IPrincipleCardProps {
  header: string;
  content: React.ReactNode;
  icon?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  buttonRef?: React.RefObject<HTMLButtonElement>;
  linkText?: string;
  linkAddress?: string;
  iconElement?: React.ReactNode;
}

export const PrincipleCard = (props: IPrincipleCardProps) => {
  const {
    header,
    icon,
    content,
    buttonText,
    onButtonClick,
    buttonRef,
    linkText,
    linkAddress,
    iconElement
  } = props;
  return (
    <div className="principle-card-wrapper">
      <InfoCard>
        <div className="principle-card">
          <div className="principle-card-content">
            {icon && !iconElement && <Emoji name={icon} className="principle-card-icon" />}
            <span aria-hidden>{iconElement}</span>
            <div style={{"fontSize": "24px", "fontWeight": 700}} className="principle-card-header">{header}</div>
            <div>{content}</div>
          </div>
          {buttonText && onButtonClick && <Button onClick={onButtonClick} ref={buttonRef} >{buttonText}</Button>}
          {linkText && linkAddress && (
            <ButtonLink href={linkAddress}>{linkText}</ButtonLink>
          )}
        </div>
      </InfoCard>
    </div>
  );
};
