import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-food-fetcher',
  templateUrl: './food-fetcher.component.html',
  styleUrls: ['./food-fetcher.component.css']
})
export class FoodFetcherComponent implements OnInit {

  constructor(private http: HttpClient) { }

  fetchTopVitamin(string) {
    return this.http.get('../assets/food.json').subscribe((res) => {
      let vitaminsB6 = [];
      for(let i in res) {
        if(res[i].Data.Vitamins[string] > 0){

          let vitaminB6 = res[i];
          vitaminB6 = {...vitaminB6, val:res[i].Data.Vitamins[string]};
          vitaminsB6.push(vitaminB6);
        }
      }
      vitaminsB6.sort(function(a, b) {
        return b.val - a.val;
      });

      let topVitaminB6 = [];
      for(let i = 0; i < 10; i++) {
        topVitaminB6.push(vitaminsB6[i]);
      }
      console.log(topVitaminB6);
    });
  }

  fetchFood() {
    return this.http.get('.../assets/food.json').subscribe((res) => {
      let foodList = [];
      for(let i in res) {
        let food = res[i];
        foodList.push(food);
      }
      return foodList;
    });
  }
}
