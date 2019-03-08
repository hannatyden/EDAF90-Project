import { Injectable } from '@angular/core';
import { Vitamin } from './select-food-page/select-food-page.component';
import { SelectFoodPageComponent } from './select-food-page/select-food-page.component';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class VitaminService {

  constructor() { 
    
    }
  checkedVitamins: Vitamin [];
  getVitamins(): Observable<Vitamin []>{
    return of(this.checkedVitamins) ;
  }  
  }


