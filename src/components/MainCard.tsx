import { Card } from '@mui/material';
import bg from '../assets/images/background.svg';

export const MainCard = () => {
  return (
    <Card
      sx={{
        minHeight: { xs: 160, sm: 180, lg: 220 },
      }}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex items-center justify-between p-4">
        <div>
          <h1>Berlin, Germany</h1>
          <p>Tuesday, Aug 5, 2025</p>
        </div>
        <div>
          <h1>22°C </h1>
        </div>
      </div>
    </Card>
  );
};
