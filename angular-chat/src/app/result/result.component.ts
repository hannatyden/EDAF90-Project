import { Component, OnInit } from '@angular/core';
import { VitaminResult } from '../result/vitaminresult';
//import { TESTVITAMINRESULT } from '../result/test-vitamins'
import { SelectFoodPageComponent } from '../select-food-page/select-food-page.component';
import { VitaminService } from '../vitamin.service';
import { Vitamin } from '../select-food-page/select-food-page.component';
@Component({
  providers: [SelectFoodPageComponent],
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  vitamins: Vitamin [];
  RDIVitamins: Vitamin [] = [
    {value: 'Vitamin A - IU', number: 5000, percentage: 0},
    {value: 'Vitamin A - RAE', number: 1200, percentage: 0},
    {value: 'Vitamin B6', number: 2.5, percentage: 0},
    {value: 'Vitamin B12', number: 2, percentage: 0},
    {value: 'Vitamin C', number: 40, percentage: 0},
    {value: 'Vitamin E', number: 15, percentage: 0},
    {value: 'Vitamin K', number: 90, percentage: 0}
  ];
  percentage: String [] = [];

  constructor(private vitaminService: VitaminService) { }

  getVitamins(): void {
      this.vitaminService.getVitamins()
        .subscribe(vitamins => this.vitamins = vitamins);
  }

  calculateRDIVitamins() {
    for(let i in this.vitamins) {
      let percentage = (this.vitamins[i].number / this.RDIVitamins[i].number)*100;
      this.vitamins[i].percentage = percentage.toFixed(2);
    }
     console.log(this.vitamins[0].percentage);
  }

  ngOnInit() {
      this.getVitamins();
      console.log(this.vitamins);
  }
}
