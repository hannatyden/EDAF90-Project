import { Component, OnInit } from '@angular/core';
import  { FoodFetcherComponent } from '../food-fetcher/food-fetcher.component';


@Component({
  providers: [FoodFetcherComponent],
  selector: 'app-suggested',
  templateUrl: './suggested.component.html',
  styleUrls: ['./suggested.component.css']
})
export class SuggestedComponent implements OnInit {

  

  constructor(private comp: FoodFetcherComponent) { }


  public fetchTop(string) {
    let top = this.comp.fetchTopVitamin(string);
    
  }

  ngOnInit() {
  
  }

}




