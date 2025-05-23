import { InfoCard } from '@/shared/ui/InfoCard/InfoCard';
import './ComparisonCard.css';
import { Emoji } from 'react-apple-emojis';
import { RiProhibitedLine } from 'react-icons/ri';
import { FaCheckCircle } from 'react-icons/fa';

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
              {/* <Emoji name="prohibited" className="comparison-card-icon" /> */}
              {/* E62F08 */}
              <RiProhibitedLine size={30} color='#E62F08' /> 
            </span>
            <div className="comparison-card-description">
              {props.contentProblem}
            </div>
          </div>
          <div className="comparison-card-content">
            <span className="comparison-card-header">
              Решение
              {/* <Emoji
                name="check-mark-button"
                className="comparison-card-icon"
              /> */}
              <FaCheckCircle size={30} color='#00BD00' /> 
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
