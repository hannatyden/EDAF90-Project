import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultComponent } from './result/result.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { SuggestedComponent } from './suggested/suggested.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    HeaderComponent,
    HomeComponent,
    SuggestedComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule
  ],
  providers: [ FoodFetcherComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
