export type GeoResult = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation?: number;
  feature_code?: string;
  country_code?: string;
  admin1_id?: number;
  admin2_id?: number;
  admin3_id?: number;
  admin4_id?: number;
  timezone?: string;
  population?: number;
  postcodes?: string[];
  country_id?: number;
  country?: string;
  admin1?: string;
  admin2?: string;
  admin3?: string;
  admin4?: string;
};

export type GeocodingResponse = {
  results?: GeoResult[];
};

export type WeatherResponse = {
  latitude: number;
  longitude: number;
  current_weather: {
    temperature: number;
    windspeed: number;
    weathercode: number;
  };
};

export const formatDate = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});
