import { useState, useEffect } from 'react';
import { Card, Typography } from '@mui/material';
import { DropDownHourly } from './DropDownHourly';
import { formatDate, formatHour, getUniqueDays } from 'utils/formatters';

type HourlyForecastCardProps = {
  temperature_2m: number[];
  time: string[];
};

export const HourlyForecastCard = ({
  temperature_2m,
  time,
}: HourlyForecastCardProps) => {
  const today = new Date().toISOString().split('T')[0];
  const uniqueDays = getUniqueDays(time);
  const [selectedDay, setSelectedDay] = useState(uniqueDays[0] ?? '');

  useEffect(() => {
    if (uniqueDays.length === 0) return;
    setSelectedDay((prev) => {
      if (prev) return prev;
      return uniqueDays.includes(today) ? today : uniqueDays[0];
    });
  }, [uniqueDays, today]);
  const hourlyData = time
    .map((t, index) => ({
      time: t,
      temperature: temperature_2m[index],
    }))
    .filter(({ time }) => time.startsWith(selectedDay));
  const dayOptions = uniqueDays.map((date) => ({
    value: date,
    label: formatDate(false, date),
  }));
  return (
    <Card
      sx={{
        minHeight: { xs: 50, sm: 50, lg: 70 },
        height: { xs: 450, sm: 470, lg: 560 },
        backgroundColor: 'hsl(var(--color-neutral-700))',
      }}
    >
      <div className="flex items-center justify-between p-4">
        <Typography style={{ color: 'white' }}>Hourly forecast</Typography>
        <DropDownHourly
          value={selectedDay}
          onChange={setSelectedDay}
          options={dayOptions}
        />
      </div>
      <div style={{ overflowY: 'auto', height: 'calc(100% - 72px)' }}>
        {hourlyData.map(({ time, temperature }) => (
          <Card
            key={time}
            sx={{
              m: 3,
              minHeight: { xs: 40, sm: 50, lg: 60 },
              backgroundColor: 'hsl(var(--color-neutral-800))',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px',
            }}
          >
            <Typography
              style={{
                color: 'hsl(var(--color-neutral-300))',
                fontSize: '0.75rem',
              }}
            >
              {formatHour(time)}
            </Typography>
            <Typography style={{ color: 'white', fontWeight: 'bold' }}>
              {temperature}°
            </Typography>
          </Card>
        ))}
      </div>
    </Card>
  );
};
