import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoodFetcherComponent } from './food-fetcher/food-fetcher.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodFetcherComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ FoodFetcherComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
