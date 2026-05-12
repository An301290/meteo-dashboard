import { Card, Typography } from '@mui/material';

type DailyForecastCardProps = {
  maxTemp: number[];
  minTemp: number[];
};

export const DailyForecastCard = ({
  maxTemp,
  minTemp,
}: DailyForecastCardProps) => {
  let weatherDailyDetails = [
    { label: 'Mon', valueMax: maxTemp[0], valueMin: minTemp[0] },
    { label: 'Tue', valueMax: maxTemp[1], valueMin: minTemp[1] },
    { label: 'Wed', valueMax: maxTemp[2], valueMin: minTemp[2] },
    { label: 'Thu', valueMax: maxTemp[3], valueMin: minTemp[3] },
    { label: 'Fri', valueMax: maxTemp[4], valueMin: minTemp[4] },
    { label: 'Sat', valueMax: maxTemp[5], valueMin: minTemp[5] },
    { label: 'Sun', valueMax: maxTemp[6], valueMin: minTemp[6] },
  ];
  return (
    <div>
      <Typography>Daily Forecast</Typography>
      <div className="flex gap-4 mt-4">
        {weatherDailyDetails.map((info) => (
          <Card
            key={info.label}
            sx={{
              minHeight: { xs: 50, sm: 50, lg: 70 },
              height: { xs: 100, sm: 100, lg: 160 },
              flex: 1,
              backgroundColor: 'hsl(var(--color-neutral-700))',
            }}
          >
            <div className="flex h-full flex-col items-center  justify-between p-4">
              <Typography color="text.primary">{info.label}</Typography>
              <div className="mt-1 flex w-full flex-row items-center justify-between">
                <Typography
                  color="text.primary"
                  sx={{ fontSize: { xs: '0.75rem', sm: '0.8rem' } }}
                >
                  {info.valueMax}°
                </Typography>
                <Typography
                  color="text.primary"
                  sx={{ fontSize: { xs: '0.75rem', sm: '0.8rem' } }}
                >
                  {info.valueMin}°
                </Typography>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
