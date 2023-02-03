import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-weather-widget-search',
  templateUrl: './weather-widget-search.component.html',
  styleUrls: ['./weather-widget-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherWidgetSearchComponent implements OnInit {
  city = '';
  private searchSubject = new Subject<string>();

  constructor() {}

  ngOnInit(): void {}

  public search() {
    this.searchSubject.next(this.city);
  }
}
