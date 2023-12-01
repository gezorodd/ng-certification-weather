export interface CoordinatesRepsonse {
  zip: string;
  name: string;
  lat: number;
  lon: number;
  country: string;
}

export interface WeahterDataResponse {
  daily: WeatherDailyData[];
}

export interface WeatherCurrentData {
  temp: number;
}

export interface WeatherDailyData {
  temp: WeatherDailyDataTemp;
  weather: WeatherDailyDataWeather[];
}

export interface WeatherDailyDataTemp {
  min: number;
  max: number;
}

export interface WeatherDailyDataWeather {
  main: string;
}
