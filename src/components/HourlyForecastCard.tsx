import { useState } from 'react';
import { Card } from '@mui/material';
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
  const uniqueDays = getUniqueDays(time);
  const [selectedDay, setSelectedDay] = useState(uniqueDays[0] ?? '');
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
        height: { xs: 430, sm: 450, lg: 490 },
        backgroundColor: '#2F2F49',
      }}
    >
      <div className="flex items-center justify-between p-4">
        <h1 style={{ color: 'white' }}>Hourly forecast</h1>
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
              minHeight: { xs: 30, sm: 30, lg: 40 },
              backgroundColor: '#25253F',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px',
              gap: '4px',
            }}
          >
            <span style={{ color: '#aaa', fontSize: '0.75rem' }}>
              {formatHour(time)}
            </span>
            <span style={{ color: 'white', fontWeight: 'bold' }}>
              {temperature}°
            </span>
          </Card>
        ))}
      </div>
    </Card>
  );
};
