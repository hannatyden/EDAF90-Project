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

  constructor(private vitaminService: VitaminService) { }

  getVitamins(): void { 
      this.vitaminService.getVitamins()
        .subscribe(vitamins => this.vitamins = vitamins);
  }
  ngOnInit() {
      this.getVitamins();
      console.log(this.vitamins);
  }
}
