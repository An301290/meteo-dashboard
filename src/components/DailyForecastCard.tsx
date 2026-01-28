import { Card } from '@mui/material';

export const DailyForecastCard = () => {
  return (
    <div>
      <h1 className="text-white">Daily Forecast</h1>
      <Card
        sx={{
          mt: 2,
          minHeight: { xs: 90, sm: 90, lg: 100 },
          width: '10%',
          backgroundColor: '#2F2F49',
        }}
      ></Card>
    </div>
  );
};
