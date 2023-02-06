import { Component } from '@angular/core';
import { WeatherData } from '../interfaces/weather-data.interface';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent {
  constructor(private weatherService: WeatherService) {}

  weatherData!: WeatherData;

  fetchWeatherData(city: string): void {
    this.weatherService
      .fetchCurentWeather(city)
      .subscribe((data) => (this.weatherData = data));
  }
}
