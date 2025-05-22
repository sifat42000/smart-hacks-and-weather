// 5-day / 3-hour Forecast API
export async function getWeatherForecast(city: string = 'Dhaka', lang: string = 'bn') {
  const API_KEY = process.env.WEATHER_API_KEY || process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=${lang}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Forecast API error');
    return await res.json();
  } catch (err) {
    return null;
  }
}
// Write a TypeScript async function named getWeather that takes a city name as parameter.
// The function should use fetch to get weather data from OpenWeatherMap API.
// Read the API key from process.env.WEATHER_API_KEY or NEXT_PUBLIC_WEATHER_API_KEY.
// Construct the API URL with the city name, API key, and units=metric.
// If the response is not OK, throw an error.
// Return the parsed JSON weather data.

const API_KEY = process.env.WEATHER_API_KEY || process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function getWeather(city: string = 'Dhaka', lang: string = 'bn') {
  try {
    const url = `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=${lang}`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Weather API error');
    }
    return await res.json();
  } catch (err) {
    return null;
  }
}
