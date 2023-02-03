import { CurrentLocation } from './current-location.interface';
import { CurrentWeather } from './current-weather.interface';

export interface WeatherData {
  location: CurrentLocation;
  current: CurrentWeather;
}
