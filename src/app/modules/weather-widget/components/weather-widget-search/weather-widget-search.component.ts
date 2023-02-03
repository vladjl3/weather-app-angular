import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget-search',
  templateUrl: './weather-widget-search.component.html',
  styleUrls: ['./weather-widget-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherWidgetSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
