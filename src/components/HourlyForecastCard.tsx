import { Card } from '@mui/material';
import { DropDown } from './DropDown';

export const HourlyForecastCard = () => {
  return (
    <Card
      sx={{
        minHeight: { xs: 460, sm: 480, lg: 520 },
        backgroundColor: '#2F2F49',
      }}
    >
      <div className="flex items-center justify-between p-4">
        <h1>Hourly forecast</h1>
        <DropDown />
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
