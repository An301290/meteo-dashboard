import { Card } from '@mui/material';
import { DropDownHourly } from './DropDownHourly';

export const HourlyForecastCard = () => {
  return (
    <Card
      sx={{
        minHeight: { xs: 460, sm: 480, lg: 520 },
        backgroundColor: '#2F2F49',
      }}
    >
      <div className="flex items-center justify-between p-4">
        <h1 style={{ color: 'white' }}>Hourly forecast</h1>
        <DropDownHourly />
      </div>

      <Card
        sx={{
          m: 2,
          minHeight: { xs: 30, sm: 30, lg: 40 },
          backgroundColor: '#25253F',
        }}
      ></Card>
    </Card>
  );
};
