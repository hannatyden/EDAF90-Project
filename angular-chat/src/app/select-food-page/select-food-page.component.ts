import {Component, OnInit} from '@angular/core';
import { FormControl} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FoodFetcherComponent} from '../food-fetcher/food-fetcher.component';
import { VitaminService } from '../vitamin.service';

export interface Food {
  name: string;
  Description: {};
  Data: {
    "Vitamins": {
      "Vitamin A - IU": number, 
      "Vitamin C": number, 
      "Vitamin B12": number, 
      "Vitamin B6": number, 
      "Vitamin A - RAE": number, 
      "Vitamin E": number, 
      "Vitamin K": number
    }, 
  }
}

export interface Vitamin {
  value: string;
  number: number;
}

@Component({
  providers: [FoodFetcherComponent],
  selector: 'app-select-food-page',
  templateUrl: './select-food-page.component.html',
  styleUrls: ['./select-food-page.component.css']
})
export class SelectFoodPageComponent implements OnInit {
  constructor(private comp: FoodFetcherComponent, private vitaminService: VitaminService) {

  }

  foods: Food[];
  addedFoods: Food[] = [];
  addedFoodObjects: Food[] = [];
  vitaminChecker: Vitamin[] = [
    {value: 'Vitamin A - IU', number: 0,},
    {value: 'Vitamin A - RAE', number: 0},
    {value: 'Vitamin B6', number: 0},
    {value: 'Vitamin B12', number: 0},
    {value: 'Vitamin C', number: 0},
    {value: 'Vitamin E', number: 0},
    {value: 'Vitamin K', number: 0}
  ];
  
  public fetchFood() {
    this.comp.fetchFood().subscribe(foods => {
        this.foods = foods;
    });
  }

  public addFood($food) {
    this.addedFoods.push($food);
  }

  public checkVitaminCount() {
    for(let k in this.addedFoods) {
      for(let i in this.foods) {
        if(this.addedFoods[k] == this.foods[i].Description) {
          this.addedFoodObjects.push(this.foods[i]);
        }
      }
    }
    for(let i in this.addedFoodObjects) {
      for(let k in this.vitaminChecker) {
        let str = this.vitaminChecker[k].value
        let val = this.addedFoodObjects[i].Data.Vitamins[str];
        this.vitaminChecker[k].number = this.vitaminChecker[k].number + val;
      }
    }
    console.log(this.vitaminChecker);
    VitaminService.prototype.checkedVitamins = this.vitaminChecker;
  }

  myControl: FormControl = new FormControl();

  filteredOptions: Observable<Food[]>;


  ngOnInit() {
    this.fetchFood();
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      map(value => this._filter(value))
    );
}

displayFn(food? : Food): string | undefined {
  return food ? food.name : undefined;
}

private _filter(name: string): Food[]{
  const filterValue = name.toLowerCase();

  return this.foods.filter(option =>
    option.name.toLowerCase().includes(filterValue)
  ).splice(0, 10);
}

}
