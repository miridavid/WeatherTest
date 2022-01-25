import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  cityName="";
  cityDetails;
  icon;
  constructor(private api:ApiService) { }

  ngOnInit() {

  }
  
  changeValue(e){
    this.cityDetails=e;
    //this.cityName=e.value.name
console.log(e.value.name)
this.api.getTemp(e.value.name).subscribe(n=>{console.log(n.weather[0].icon) , this.cityDetails=n
this.getIcon(n.weather[0].icon)

});
//document.getElementById().setAttribute("backgroung-image"'icon)
  }

  getIcon(iconCode){
    this.api.getIcon(iconCode).subscribe(x=>{this.icon=x,
      document.getElementById("icon").setAttribute("background-image",this.icon);

  })
}}
