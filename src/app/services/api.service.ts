import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
// private readonly url="https://api.openweathermap.org/data/2.5/weather?q=Jerusalem&appid=98efe67ea5d4dec67820015c319ffcf2"
private readonly ApiKey='98efe67ea5d4dec67820015c319ffcf2'

getTemp(cityName){
  const result=this.http.get<any>("https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+this.ApiKey+"&units=metric");

  return result;
}
// weather-background-minimal-hd
getCities(){
  const result=this.http.get<any>('assets/cities.json');
  
  return result;
}
getIcon(icon){
  const result=this.http.get<any>("http://openweathermap.org/img/wn/"+icon+"@2x.png");

  return result;
}

constructor(private http:HttpClient ) { }
}
