import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';


const routes: Routes = [
  {
    path:'weather',
    component:WeatherComponent
  },
  {
    path:'**',
redirectTo:'weather' 
 }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
