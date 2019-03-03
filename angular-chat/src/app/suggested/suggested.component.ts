import { Component, OnInit } from '@angular/core';

export interface Vitamin {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-suggested',
  templateUrl: './suggested.component.html',
  styleUrls: ['./suggested.component.css']
})
export class SuggestedComponent implements OnInit {

  constructor() { }

  selectedValue: string;
  selectedVitamin: string;

  vitamins: Vitamin[] = [
    {value: 'Vitamin A', viewValue: 'Vitamin A'},
    {value: 'Vitamin B1', viewValue: 'Vitamin B1'},
    {value: 'Vitamin B2', viewValue: 'Vitamin B2'},
    {value: 'Vitamin B3', viewValue: 'Vitamin B3'},
    {value: 'Vitamin B5', viewValue: 'Vitamin B2'},
    {value: 'Vitamin B6', viewValue: 'Vitamin B6'},
    {value: 'Vitamin B7', viewValue: 'Vitamin B7'},
    {value: 'Vitamin B12', viewValue: 'Vitamin B12'},
    {value: 'C-vitamin', viewValue: 'C-vitamin'},
    {value: 'D-vitamin', viewValue: 'D-vitamin'},
    {value: 'E-vitamin', viewValue: 'E-vitamin'},
    {value: 'Folsyra', viewValue: 'Folsyra'},
    {value: 'K-vitamin', viewValue: 'K-vitamin'}

  ];

  ngOnInit() {
  
  }

}




