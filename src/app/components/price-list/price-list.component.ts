import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Day } from 'src/app/models/Day';

import { ApiService } from 'src/app/services/api.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {
 //allDays$:Observable<any>;
 //allDays;
 allDays:Day[]=[]
 maxBuy;
 maxSale;
 
constructor(private api:ApiService,private store:StoreService) { }

   init(){
    this.store.getAllPrice()
    
    this.allDays=this.store.allDays

    this.maxBuy=this.store.MaxBuysubject.subscribe()
    this.store.MaxBuysubject.subscribe(e => {
      this.maxBuy = e
      console.log(e)
    })
    this.maxSale=this.store.MaxSalesubject.subscribe()
    this.store.MaxSalesubject.subscribe(e => {
      this.maxSale = e
      console.log(e)
    })

   }


search(ev){
  this.allDays=this.allDays.filter(x=>x.title.getFullYear()===ev.getFullYear()
  &&x.title.getMonth()===ev.getMonth()
  && x.title.getDate()===ev.getDate())
}
  ngOnInit() {
  
    this.init()
   
  }
 
  
  reset(){
    debugger
    this.allDays=this.store.allDays;
  }
  


}
