import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatIconModule, MatInputModule } from '@angular/material';
import { MatAutocompleteModule} from '@angular/material';
import { MatOptionModule } from '@angular/material'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultComponent } from './result/result.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { SuggestedComponent } from './suggested/suggested.component';
import {HttpClientModule} from '@angular/common/http';
import {FoodFetcherComponent} from './food-fetcher/food-fetcher.component';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule }  from '@angular/forms';
import { FormsModule } from  '@angular/forms';
import { SelectFoodPageComponent } from './select-food-page/select-food-page.component';
import { VitaminService } from './vitamin.service';



@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    HeaderComponent,
    HomeComponent,
    SuggestedComponent,
    FoodFetcherComponent,
    SelectFoodPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatIconModule,
    MatAutocompleteModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [ FoodFetcherComponent, VitaminService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
