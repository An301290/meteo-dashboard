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
import { GeocodingResponse } from 'types/openMeteo';

function App() {
  const [cityName, setCityName] = useState<string>('');

  const url = useMemo(() => {
    const name = encodeURIComponent(cityName.trim() || 'Berlin');
    return `https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=10&language=en&format=json`;
  }, [cityName]);

  const { data, loading, error } = useFetch<GeocodingResponse>(url);

  const handleSearch = () => {
    setCityName(cityName);
  };

  console.log('App data:', data?.results);
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
            <MainCard />
            <div className="mt-6">
              <DailyForecastCard />
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
