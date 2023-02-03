import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WeatherWidgetComponent } from './container/weather-widget.component';

@NgModule({
  declarations: [WeatherWidgetComponent],
  imports: [CommonModule],
  exports: [WeatherWidgetComponent],
})
export class WeatherWidgetModule {}
