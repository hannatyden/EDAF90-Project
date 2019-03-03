import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-food-fetcher',
  templateUrl: './food-fetcher.component.html',
  styleUrls: ['./food-fetcher.component.css']
})
export class FoodFetcherComponent implements OnInit {

  myTop: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }

  fetchTopVitamin(string) {
    return this.http.get('../assets/food.json').subscribe((res) => {
      let vitamins = [];
      for(let i in res) {
        if(res[i].Data.Vitamins[string] > 0){

          let vitamin = res[i];
          vitamin = {...vitamin, val:res[i].Data.Vitamins[string]};
          vitamins.push(vitamin);
        }
      }
      vitamins.sort(function(a, b) {
        return b.val - a.val;
      });

      let topVitamin = [];
      for(let i = 0; i < 10; i++) {
        topVitamin.push(vitamins[i]);
      }
      this.myTop = topVitamin;
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
