export interface CurrentWeather {
  last_updated_epoch: number;
  temp_c: number;
  temp_f: number;
  is_day: boolean;
  condition: {
    code: 1000;
    icon: string;
    text: string;
  };
  feelslike_c: number;
  feelslike_f: number;
  humidity: number;
  vis_km: number;
  vis_miles: number;
  wind_kph: number;
  wind_mph: number;
}
