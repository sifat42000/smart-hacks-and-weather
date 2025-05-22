
import { getWeather, getWeatherForecast } from '../../lib/api/weather';

export default async function WeatherPage() {
  let weather = null;
  let forecast = null;
  let error = '';
  try {
    weather = await getWeather('Dhaka', 'bn');
    forecast = await getWeatherForecast('Dhaka', 'bn');
    if (!weather) error = 'ডাটা পাওয়া যায়নি।';
  } catch (e) {
    error = 'ডাটা পাওয়া যায়নি।';
  }

  // Group forecast list by day
  let grouped: Record<string, any[]> = {};
  if (forecast && forecast.list) {
    forecast.list.forEach((item: any) => {
      const date = new Date(item.dt_txt);
      const day = date.toLocaleDateString('bn-BD', { weekday: 'long', month: 'short', day: 'numeric' });
      if (!grouped[day]) grouped[day] = [];
      grouped[day].push(item);
    });
  }

  return (
    <div className="p-8 flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-2xl font-bold mb-4 text-center">লাইভ আবহাওয়া রিপোর্ট</h2>
      {error ? (
        <div className="text-red-600 font-bold">{error}</div>
      ) : !weather ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="flex flex-col items-center gap-4 bg-white/80 dark:bg-gray-800/80 rounded-xl p-8 shadow-lg border border-blue-200 dark:border-gray-700 mb-8">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
              className="w-24 h-24 mb-2"
            />
            <div className="text-3xl font-bold text-blue-700 dark:text-blue-200">{weather.main.temp}°C</div>
            <div className="text-xl font-semibold">{weather.weather[0].description}</div>
            <div>বাতাস: {weather.wind.speed} m/s</div>
            <div>আর্দ্রতা: {weather.main.humidity}%</div>
            <div className="mt-2 text-green-600 font-bold">{weather.weather[0].main === 'Rain' ? 'আজ ছাতা নিতে ভুলবেন না' : 'আবহাওয়া ভালো, বাইরে যেতে পারেন!'}</div>
          </div>

          {/* Forecast Section */}
          <div className="w-full max-w-4xl">
            <h3 className="text-xl font-bold mb-4 text-center">৫ দিনের আবহাওয়া পূর্বাভাস</h3>
            <div className="space-y-8">
              {Object.entries(grouped).map(([day, items]) => (
                <div key={day}>
                  <div className="font-bold text-lg text-blue-600 dark:text-blue-300 mb-2">{day}</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {items.map((item: any) => (
                      <div key={item.dt} className="bg-white dark:bg-gray-900 rounded-lg shadow p-3 flex flex-col items-center border border-blue-100 dark:border-gray-800">
                        <div className="text-sm text-gray-500 mb-1">{new Date(item.dt_txt).toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' })}</div>
                        <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={item.weather[0].description} className="w-12 h-12" />
                        <div className="font-bold">{item.main.temp}°C</div>
                        <div className="text-xs text-gray-700 dark:text-gray-300">{item.weather[0].description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
