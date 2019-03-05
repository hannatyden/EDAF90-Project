import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import {HomeComponent} from './home/home.component';
import {SuggestedComponent} from './suggested/suggested.component';
import {SelectFoodPageComponent} from './select-food-page/select-food-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'result',
    component: ResultComponent,
  },
  {
    path: 'suggested',
    component: SuggestedComponent,
  },
  {
    path: 'select-food-page',
    component: SelectFoodPageComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
