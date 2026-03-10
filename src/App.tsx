import { useState, useMemo } from 'react';
import { Container } from './components/layout/Container';
import { PageBackground } from './components/layout/PageBackground';
import logo from './assets/images/mainlogo.svg';
import { DropDown } from 'components/DropDown';
import { SearchField } from 'components/SearchField';
import { MainCard } from 'components/MainCard';
import { HourlyForecastCard } from 'components/HourlyForecastCard';
import { DailyForecastCard } from 'components/DailyForecastCard';
import { useFetch } from 'hooks/useFetch';
import {
  formatDate,
  GeocodingResponse,
  WeatherResponse,
} from 'types/openMeteoTypes';

function App() {
  const [cityName, setCityName] = useState<string>('Berlin');
  const [submittedCity, setSubmittedCity] = useState<string>('Berlin');

  const urlCountry = useMemo(() => {
    const name = encodeURIComponent(submittedCity.trim() || '');
    return `https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=10&language=en&format=json`;
  }, [submittedCity]);

  const { data, loading, error } = useFetch<GeocodingResponse>(urlCountry);
  console.log('Geocoding data:', data);
  const handleSearch = () => {
    setSubmittedCity(cityName);
  };

  const firstResult = data?.results?.[0];
  const weatherUrl = firstResult
    ? `https://api.open-meteo.com/v1/forecast` +
      `?latitude=${firstResult.latitude}` +
      `&longitude=${firstResult.longitude}` +
      `&timezone=auto` +
      `&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m,wind_gusts_10m,weather_code` +
      `&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max`
    : null;

  const {
    data: weatherData,
    loading: weatherLoading,
    error: weatherError,
  } = useFetch<WeatherResponse>(weatherUrl);

  console.log('Weather data:', weatherData);

  //https://open-meteo.com/en/docs/geocoding-api
  return (
    <PageBackground>
      <Container>
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              <img
                src={logo}
                alt="Weather Now logo"
                className="h-30 w-30 sm:h-50 sm:w-50"
              />
            </h1>
          </div>
          <DropDown />
        </header>
        <div>
          <h1 className="text-center text-white text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl pt-8">
            How's the sky lookings today?
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <SearchField
            value={cityName}
            onChange={setCityName}
            onSearch={handleSearch}
          />
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <MainCard
              city={firstResult?.name || ''}
              country={firstResult?.country || ''}
              date={formatDate}
              temperature={weatherData?.current.temperature_2m || 0}
              feelsLike={weatherData?.current.apparent_temperature || 0}
              humidity={weatherData?.current.relative_humidity_2m || 0}
              wind={weatherData?.current.wind_speed_10m || 0}
              precipitation={weatherData?.current.precipitation || 0}
            />
            <div className="mt-6">
              <DailyForecastCard
                maxTemp={weatherData?.daily.temperature_2m_max || []}
                minTemp={weatherData?.daily.temperature_2m_min || []}
              />
            </div>
          </div>
          <div className="lg:col-span-4">
            <HourlyForecastCard />
          </div>
        </div>
      </Container>
    </PageBackground>
  );
}

export default App;
