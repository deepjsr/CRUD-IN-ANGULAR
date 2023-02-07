import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { EmployesDashboardComponent } from './employes-dashboard/employes-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployesDashboardComponent,
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
