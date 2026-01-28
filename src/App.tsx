import { Container } from './components/layout/Container';
import { PageBackground } from './components/layout/PageBackground';
import logo from './assets/images/mainlogo.svg';
import { DropDown } from 'components/DropDown';
import { SearchField } from 'components/SearchField';
import { MainCard } from 'components/MainCard';
import { HourlyForecastCard } from 'components/HourlyForecastCard';
import { DailyForecastCard } from 'components/DailyForecastCard';

type Card = { id: string; title: string; desc: string };

const cards: Card[] = [
  { id: '1', title: 'Revenue', desc: 'This month’s revenue overview.' },
  { id: '2', title: 'Users', desc: 'New signups and retention.' },
  { id: '3', title: 'Performance', desc: 'Speed and error rates.' },
];

function App() {
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
          <SearchField />
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
