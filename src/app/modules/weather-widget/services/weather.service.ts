import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { AutocompleteCityOption } from '../interfaces/autocomplete-response.interface';
import { CurrentWeather } from '../interfaces/current-weather.interface';
import { WeatherData } from '../interfaces/weather-data.interface';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {}

  private API_KEY = environment.weather_api_key;
  private API_BASE_URL = environment.weather_api_base_url;

  private getCurrentWeather(response: WeatherData): CurrentWeather {
    return response.current;
  }

  public fetchCurentWeather(city: string): Observable<WeatherData> {
    const url =
      this.API_BASE_URL + `current.json?key=${this.API_KEY}&q=${city}`;
    return this.http.get<WeatherData>(url);
  }

  public fetchAutocompleteOptions(
    substring: string
  ): Observable<AutocompleteCityOption[]> {
    const url =
      this.API_BASE_URL + `search.json?key=${this.API_KEY}&q=${substring}`;
    return this.http.get<AutocompleteCityOption[]>(url);
  }
}
