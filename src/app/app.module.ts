import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { WeatherWidgetModule } from './modules/weather-widget/weather-widget.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CoreModule, WeatherWidgetModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
