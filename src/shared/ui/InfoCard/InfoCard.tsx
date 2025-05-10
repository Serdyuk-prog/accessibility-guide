import './InfoCard.css'

interface InfoCardProps {
  children: React.ReactNode
}

export const InfoCard = ({ children }: InfoCardProps) => {
 return (
  <div className="info-card">
    {children}
  </div>
 )
}