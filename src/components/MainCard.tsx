import { Card } from '@mui/material';
import bg from '../assets/images/background.svg';

type MainCardProps = {
  city: string;
  country: string;
  date: string;
  temperature: number;
};

export const MainCard = ({
  city,
  country,
  date,
  temperature,
}: MainCardProps) => {
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
      <Card
        sx={{
          mt: 4,
          minHeight: { xs: 50, sm: 50, lg: 70 },
          width: '20%',
          backgroundColor: '#2F2F49',
        }}
      ></Card>
    </div>
  );
};
