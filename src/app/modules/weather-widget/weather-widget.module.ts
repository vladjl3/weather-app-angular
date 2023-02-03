import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WeatherWidgetComponent } from './container/weather-widget.component';
import { WeatherWidgetSearchComponent } from './components/weather-widget-search/weather-widget-search.component';
import { WeatherWidgetDataComponent } from './components/weather-widget-data/weather-widget-data.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './services/weather.service';

@NgModule({
  declarations: [
    WeatherWidgetComponent,
    WeatherWidgetSearchComponent,
    WeatherWidgetDataComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [WeatherWidgetComponent],
  providers: [WeatherService],
})
export class WeatherWidgetModule {}
