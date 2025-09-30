import { Card } from './Card';

export const KpiCard = ({ icon: Icon, value, label, iconClass = '', className = '' }) => {
  return (
    <Card className={`text-center rounded-4xl shadow-md p-6 ${className}`} variant="default">
      <Icon className={`w-8 h-8 mx-auto mb-2 ${iconClass}`} />
      <h3 className="text-2xl font-bold text-white">{value}</h3>
      <p className="text-white">{label}</p>
    </Card>
  );
};
