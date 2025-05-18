import { InfoCard } from '@/shared/ui/InfoCard/InfoCard';
import './ModalInfoCard.css';

interface IModalInfoCardProps {
  header: React.ReactNode;
  children: React.ReactNode;
}
export const ModalInfoCard = (props: IModalInfoCardProps) => {
  const { header, children } = props;

  return (
    <div className="modal-card-wrapper">
      <InfoCard>
        <div className="modal-card">
          <div className="modal-card-content">
            <div
              style={{ fontSize: '24px', fontWeight: 700 }}
              className="modal-card-header"
            >
              {header}
            </div>
            <div>{children}</div>
          </div>
        </div>
      </InfoCard>
    </div>
  );
};
