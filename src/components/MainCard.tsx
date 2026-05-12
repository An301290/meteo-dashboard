import { Card, Typography } from '@mui/material';
import bg from '../assets/images/background.svg';

type MainCardProps = {
  city: string;
  country: string;
  date: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  wind: number;
  precipitation: number;
};

export const MainCard = ({
  city,
  country,
  date,
  temperature,
  feelsLike,
  humidity,
  wind,
  precipitation,
}: MainCardProps) => {
  let weatherDetails = [
    { label: 'Feels Like', value: feelsLike },
    { label: 'Humidity', value: humidity },
    { label: 'Wind', value: wind },
    { label: 'Precipitation', value: precipitation },
  ];
  return (
    <div>
      <Card
        sx={{
          minHeight: { xs: 160, sm: 180, lg: 220 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: 'hsl(var(--color-neutral-700))',
        }}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div>
          {city && country && (
            <div className="flex h-full flex-row items-center  justify-between p-4">
              <div>
                <Typography>{`${city}, ${country}`}</Typography>
                <Typography>{date}</Typography>
              </div>

              <div>
                <Typography variant="h3">{temperature}°C</Typography>
              </div>
            </div>
          )}
        </div>
      </Card>
      {city && country && (
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {weatherDetails.map((info) => (
            <Card
              key={info.label}
              sx={{
                minHeight: { xs: 50, sm: 50, lg: 70 },
                backgroundColor: 'hsl(var(--color-neutral-700))',
              }}
            >
              <div className="flex flex-col items-center justify-center p-4">
                <Typography color="text.secondary">{info.label}</Typography>
                <Typography color="text.primary">{info.value}</Typography>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
