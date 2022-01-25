import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-dropdown-cities',
  templateUrl: './dropdown-cities.component.html',
  styleUrls: ['./dropdown-cities.component.scss']
})
export class DropdownCitiesComponent implements OnInit {
  @Output() changValueEvent=new EventEmitter();
  cities2;
  
  constructor(private http:HttpClient, private store:StoreService) { }

  ngOnInit() {
     this.http.get<any>('assets/cities.json').pipe(map(x=>x.cities)).subscribe(v=> this.cities2=v)
    //this.cities2 = this.store.getCities()
    console.log("bbb"+this.cities2)
  //   this.cities2 = [
  //     {name: 'New York', code: 'NY'},
  //     {name: 'Rome', code: 'RM'},
  //     {name: 'London', code: 'LDN'},
  //     {name: 'Istanbul', code: 'IST'},
  //     {name: 'Paris', code: 'PRS'}
  // ];
  }
  valueChange(e){
    this.changValueEvent.emit(e)
//alert("kk")
  }
}
