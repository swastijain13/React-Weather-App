import React, { createContext, useState } from 'react';

export interface WeatherData {
  address: string;
  currentConditions: {
    conditions: string;
    temp: number;
    sunrise: string;
    sunset: string;
    windspeed: number;
    humidity: number;
    visibility: number;
  };
  days: {
    datetime: string;
    conditions: string;
    tempmax: number;
    tempmin: number;
    humidity: number;
    visibility: number;
  }[];
}

const WeatherContext = createContext<{
  weatherData: WeatherData | null;
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData | null>>;
}>({
  weatherData: null,
  setWeatherData: () => {},
});

const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherProvider };
