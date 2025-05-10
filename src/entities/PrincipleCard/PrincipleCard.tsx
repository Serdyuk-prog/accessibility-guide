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
  linkText?: string;
  linkAddress?: string;
}

export const PrincipleCard = (props: IPrincipleCardProps) => {
  const {
    header,
    icon,
    content,
    buttonText,
    onButtonClick,
    linkText,
    linkAddress,
  } = props;
  return (
    <div className="principle-card-wrapper">
      <InfoCard>
        <div className="principle-card">
          <div className="principle-card-content">
            {icon && <Emoji name={icon} className="principle-card-icon" />}
            <h4 className="principle-card-header">{header}</h4>
            <p>{content}</p>
          </div>
          {buttonText && <Button onClick={onButtonClick}>{buttonText}</Button>}
          {linkText && linkAddress && (
            <ButtonLink href={linkAddress}>{linkText}</ButtonLink>
          )}
        </div>
      </InfoCard>
    </div>
  );
};
