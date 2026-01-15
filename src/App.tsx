import { Container } from './components/layout/Container';
import { PageBackground } from './components/layout/PageBackground';

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
              Dashboard
            </h1>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Same page, responsive layout and spacing.
            </p>
          </div>

          <button className="w-full rounded-lg border px-4 py-2 text-sm font-medium sm:w-auto">
            Create report
          </button>
        </header>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <li key={c.id} className="rounded-xl border p-4 sm:p-5">
              <h3 className="font-medium">{c.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{c.desc}</p>
            </li>
          ))}
        </ul>

        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          <section className="lg:col-span-8 rounded-xl border p-4 sm:p-6">
            Main content
          </section>

          <aside className="lg:col-span-4 rounded-xl border p-4 sm:p-6">
            Side content
          </aside>
        </div>
      </Container>
    </PageBackground>
  );
}

export default App;
