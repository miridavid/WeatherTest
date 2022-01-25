import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  cities;



constructor(private api:ApiService) { }

getCities(){
  this.api.getCities().pipe(map(x=>x.cities)).subscribe(x=> this.cities=x)
  return this.cities
}


}
  
    


 



 
