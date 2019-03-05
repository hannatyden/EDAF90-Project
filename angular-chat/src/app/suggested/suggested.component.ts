import { Component, OnInit } from '@angular/core';
import {FoodFetcherComponent} from '../food-fetcher/food-fetcher.component';

export interface Vitamin {
  value: string;
  viewValue: string;
}

@Component({
  providers: [FoodFetcherComponent],
  selector: 'app-suggested',
  templateUrl: './suggested.component.html',
  styleUrls: ['./suggested.component.css']
})
export class SuggestedComponent implements OnInit {

  constructor(private comp: FoodFetcherComponent) { }

  selectedValue: string;
  selectedVitamin: string;
  vits;

  public fetchTop(string) {
    this.comp.fetchTopVitamin(string).subscribe( vits => {
      this.vits = vits;
      console.log(vits);
    });

  }

  public newFetch() {
    this.comp.fetchTopsVitamin();
  }


  vitamins: Vitamin[] = [
    {value: 'Vitamin A - IU', viewValue: 'Vitamin A - IU'},
    {value: 'Vitamin A - RAE', viewValue: 'Vitamin A - RAE'},
    {value: 'Vitamin B6', viewValue: 'Vitamin B6'},
    {value: 'Vitamin B12', viewValue: 'Vitamin B12'},
    {value: 'Vitamin C', viewValue: 'Vitamin C'},
    {value: 'Vitamin E', viewValue: 'Vitamin E'},
    {value: 'Vitamin K', viewValue: 'Vitamin K'}

  ];

  ngOnInit() {

  }

}
