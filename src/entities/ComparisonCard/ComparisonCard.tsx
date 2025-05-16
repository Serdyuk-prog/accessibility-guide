import { InfoCard } from '@/shared/ui/InfoCard/InfoCard';
import './ComparisonCard.css';
import { Emoji } from 'react-apple-emojis';

interface IComparisonCardProps {
  contentProblem?: React.ReactNode;
  contentSolution?: React.ReactNode;
}

export const ComparisonCard = (props: IComparisonCardProps) => {
  return (
    <div className="comparison-card-wrapper">
      <InfoCard>
        <div className="comparison-card">
          <div className="comparison-card-content">
            <span className="comparison-card-header">
              Ошибка
              <Emoji name="prohibited" className="comparison-card-icon" />
            </span>
            <div className="comparison-card-description">
              {props.contentProblem}
            </div>
          </div>
          <div className="comparison-card-content">
            <span className="comparison-card-header">
              Решение
              <Emoji
                name="check-mark-button"
                className="comparison-card-icon"
              />
            </span>
            <div className="comparison-card-description">
              {props.contentSolution}
            </div>
          </div>
        </div>
      </InfoCard>
    </div>
  );
};
