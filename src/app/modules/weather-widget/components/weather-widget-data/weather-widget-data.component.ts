import
  {
    ChangeDetectionStrategy,
    Component,
    Input
  } from '@angular/core';
import { WeatherData } from '../../interfaces/weather-data.interface';

@Component({
  selector: 'app-weather-widget-data',
  templateUrl: './weather-widget-data.component.html',
  styleUrls: ['./weather-widget-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherWidgetDataComponent {
  constructor() {}

  @Input('weatherData') weatherDataProps!: WeatherData;
}
