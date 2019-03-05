import {Component, OnInit} from '@angular/core';
import { FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FoodFetcherComponent} from '../food-fetcher/food-fetcher.component';


export interface Food {
  name: string;
}

@Component({
  providers: [FoodFetcherComponent],
  selector: 'app-select-food-page',
  templateUrl: './select-food-page.component.html',
  styleUrls: ['./select-food-page.component.css']
})
export class SelectFoodPageComponent implements OnInit {
  constructor(private comp: FoodFetcherComponent) { 

  }

  foods: Food[];
  addedFoods: Food[] = [];

  public fetchFood() {
    this.comp.fetchFoods().subscribe(foods => {
        this.foods = foods;
        console.log(this.foods);
    })
  }

  public addFood($food) {
    this.addedFoods.push($food);
    console.log(JSON.stringify(this.addedFoods));
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
