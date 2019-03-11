import { Component, OnInit } from '@angular/core';
import { VitaminResult } from '../result/vitaminresult';
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
  RDIVitamins: VitaminResult [] = [
    {name: 'Vitamin A - IU', amount: 50000, percentage: 0},
    {name: 'Vitamin A - RAE', amount: 12000, percentage: 0},
    {name: 'Vitamin B6', amount: 2500, percentage: 0},
    {name: 'Vitamin B12', amount: 2000, percentage: 0},
    {name: 'Vitamin C', amount: 4000, percentage: 0},
    {name: 'Vitamin E', amount: 1500, percentage: 0},
    {name: 'Vitamin K', amount: 900, percentage: 0}
  ];
  percentage: String [] = [];

  constructor(private vitaminService: VitaminService) { }

  getVitamins(): void {
      this.vitaminService.getVitamins()
        .subscribe(vitamins => this.vitamins = vitamins);
  }

  calculateRDIVitamins() {
    for(let i in this.vitamins) {
      let percentage = (this.vitamins[i].number / this.RDIVitamins[i].amount)*100;
      this.vitamins[i].percentage = Math.round(percentage);
    }
     console.log(this.vitamins[0].percentage);
  }

  ngOnInit() {
      this.getVitamins();
      console.log(this.vitamins);
      this.calculateRDIVitamins();
  }
}
