# 🌤️ Weather App

A responsive weather application built with React, TypeScript, and the Open-Meteo API.

---

## 📦 Tech Stack

| Layer     | Technology                                                               |
| --------- | ------------------------------------------------------------------------ |
| Framework | React 18 + TypeScript                                                    |
| Styling   | Tailwind CSS + MUI (Material UI)                                         |
| API       | [Open-Meteo](https://open-meteo.com/) (free, no key required)            |
| Geocoding | [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api) |
| State     | React `useState` / `useEffect`                                           |
| Build     | Vite                                                                     |

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

---

## 🗂️ Project Structure

```
src/
├── assets/
│   └── styles/
│       └── mui.ts              # MUI sx overrides (e.g. whiteOutlinedInput)
├── components/
│   ├── CurrentWeatherCard.tsx  # Temperature, icon, location
│   ├── WeatherMetricsCard.tsx  # Feels like, humidity, wind, precipitation
│   ├── DailyForecastCard.tsx   # 7-day forecast
│   ├── HourlyForecastCard.tsx  # 24h scrollable hourly list
│   │   └── DropDownHourly.tsx  # Day selector dropdown
│   ├── SearchBar.tsx           # Location search input
│   └── UnitsToggle.tsx         # Imperial / Metric switcher
├── hooks/
│   └── useWeather.ts           # Fetches weather + geocoding data
├── utils/
│   └── formatters.ts           # formatDate, formatHour, getUniqueDays
├── types/
│   └── weather.ts              # API response types
├── App.tsx
└── main.tsx
```

---

## 🌐 API Reference

### Geocoding — Search by location name

```
GET https://geocoding-api.open-meteo.com/v1/search?name={city}&count=1
```

### Weather — Fetch forecast by coordinates

```
GET https://api.open-meteo.com/v1/forecast
  ?latitude={lat}
  &longitude={lon}
  &current=temperature_2m,apparent_temperature,weather_code,
            relative_humidity_2m,wind_speed_10m,precipitation
  &hourly=temperature_2m,time
  &daily=temperature_2m_max,temperature_2m_min,weather_code,sunrise,sunset
  &wind_speed_unit=mph          // omit for km/h
  &temperature_unit=fahrenheit  // omit for celsius
  &precipitation_unit=inch      // omit for mm
  &timezone=auto
  &forecast_days=7
```

---

## ✅ Features

- [x] Search for any location by name
- [x] Current conditions — temperature, feels like, humidity, wind, precipitation
- [x] 7-day daily forecast with high/low
- [x] Hourly forecast (24 items per day, scrollable)
- [x] Day selector dropdown — defaults to today
- [x] Toggle between Metric and Imperial units
- [x] Responsive layout (mobile + desktop)
- [ ] Geolocation on first visit
- [ ] Saved/favourite locations
- [ ] Compare locations side-by-side
- [ ] UV index, visibility, air pressure
- [ ] Sunrise / sunset times
- [ ] Animated weather backgrounds
- [ ] PWA support

---

## 🛠️ Utils — `src/utils/formatters.ts`

```ts
// "2026-05-08" or undefined → "Friday, May 8, 2026" / "Fri, May 8"
formatDate(showYear?: boolean, isoString?: string): string

// "2026-05-08T14:00" → "2 PM"
formatHour(isoString: string): string

// Full time array → ["2026-05-08", "2026-05-09", ...] (7 unique dates)
getUniqueDays(timeArray: string[]): string[]
```

---

## 📐 Units Toggle

The units dropdown controls three API params sent on refetch:

| Setting       | Metric    | Imperial     |
| ------------- | --------- | ------------ |
| Temperature   | `celsius` | `fahrenheit` |
| Wind speed    | `km/h`    | `mph`        |
| Precipitation | `mm`      | `inch`       |

Store the selected unit in top-level state and pass it down to `useWeather` so the API re-fetches whenever it changes.

---

## 🎨 Design Notes

- Background: `#1A1A2E` (page), `#2F2F49` (cards), `#25253F` (inner cards)
- Font: System sans-serif or Inter
- All interactive elements should have visible `:hover` and `:focus` states
- Target breakpoints: `xs` (mobile), `sm` (tablet), `lg` (desktop)
