import { Component, OnInit } from '@angular/core';
import { VitaminResult } from '../result/vitaminresult';
import { TESTVITAMINRESULT } from '../result/test-vitamins'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  
  vitamins = TESTVITAMINRESULT;

  constructor() { 
    
  }

  ngOnInit() {
  }
}
