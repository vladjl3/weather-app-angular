import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WeatherWidgetComponent } from './container/weather-widget.component';
import { WeatherWidgetSearchComponent } from './components/weather-widget-search/weather-widget-search.component';
import { WeatherWidgetDataComponent } from './components/weather-widget-data/weather-widget-data.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WeatherWidgetComponent,
    WeatherWidgetSearchComponent,
    WeatherWidgetDataComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [WeatherWidgetComponent],
})
export class WeatherWidgetModule {}
