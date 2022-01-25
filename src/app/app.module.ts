import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import { WeatherComponent } from './components/weather/weather.component';
import {PanelModule} from 'primeng/panel';
import { DropdownCitiesComponent } from './components/dropdown-cities/dropdown-cities.component';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    DropdownCitiesComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PanelModule,
    DropdownModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
