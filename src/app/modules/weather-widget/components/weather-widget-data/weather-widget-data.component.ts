import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget-data',
  templateUrl: './weather-widget-data.component.html',
  styleUrls: ['./weather-widget-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherWidgetDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
