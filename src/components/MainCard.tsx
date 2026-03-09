import { Card } from '@mui/material';
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
        }}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex items-center justify-between p-4">
          {city && country && (
            <div>
              <div>
                <h1>{`${city}, ${country}`}</h1>
                <p>{date}</p>
              </div>

              <div>
                <h1>{temperature}°C</h1>
              </div>
            </div>
          )}
        </div>
      </Card>
      {city && country && (
        <div className="flex gap-4 mt-4">
          {weatherDetails.map((info) => (
            <Card
              key={info.label}
              sx={{
                minHeight: { xs: 50, sm: 50, lg: 70 },
                flex: 1,
                backgroundColor: '#2F2F49',
              }}
            >
              <div className="flex flex-col items-center justify-center p-4">
                <span>{info.label}</span>
                <span>{info.value}</span>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
