import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatIconModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatExpansionModule
} from '@angular/material';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilterBoxComponent } from './filter-box/filter-box.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelItemComponent } from './hotel-item/hotel-item.component';
import { HotelsService} from './services/hotels.service';

@NgModule({
  declarations: [
    AppComponent,
    FilterBoxComponent,
    HotelsListComponent,
    HotelItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FormBuilder, HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
