import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  switchMap,
} from 'rxjs';
import { AutocompleteCityOption } from '../../interfaces/autocomplete-response.interface';
import { WeatherData } from '../../interfaces/weather-data.interface';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-widget-search',
  templateUrl: './weather-widget-search.component.html',
  styleUrls: ['./weather-widget-search.component.scss'],
})
export class WeatherWidgetSearchComponent implements OnInit {
  city = '';
  weather$!: Observable<WeatherData>;
  cities$!: Observable<AutocompleteCityOption[]>;
  private searchSubject = new Subject<string>();

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.cities$ = this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((query) => {
        console.log('query: ', query);
        return this.weatherService.fetchAutocompleteOptions(query);
      })
    );
  }

  public search() {
    this.searchSubject.next(this.city);
  }

  public selectCity(cityName: string) {
    this.city = cityName;
    console.log(this.city);
  }
}
