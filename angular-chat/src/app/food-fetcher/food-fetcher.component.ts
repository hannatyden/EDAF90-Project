import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-food-fetcher',
  templateUrl: './food-fetcher.component.html',
  styleUrls: ['./food-fetcher.component.css']
})
export class FoodFetcherComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit(){

  }

  fetchTopVitamin(string) {

    return this.http.get('../assets/food.json').pipe(
      map((res) => {
        let vitaminsB6 = [];
        for(let i in res) {
          if(res[i].Data.Vitamins[string] > 0){

            let vitaminB6 = res[i];
            vitaminB6 = {...vitaminB6, val:res[i].Data.Vitamins[string], name:res[i].Description};
            vitaminsB6.push(vitaminB6);
          }
        }
        vitaminsB6.sort(function(a, b) {
          return b.val - a.val;
        });

        let topVitaminB6 =  [];
        for(let i = 0; i < 10; i++) {
          topVitaminB6.push(vitaminsB6[i].name);
        }
        return topVitaminB6;
      })
    );

  }

  fetchTopsVitamin() {

    return this.http.get('../assets/food.json').pipe(map(data => {})).subscribe(res =>{
        console.log(res);
    });
  }

  fetchFood() {
    return this.http.get('../assets/food.json').pipe(
      map((res) => {
        let foods = [];
        for(let i in res) {
          let food = res[i];
          food = {...food, name:res[i].Description};
          foods.push(food);
        }
        return foods;
      })
    );

  }
}
