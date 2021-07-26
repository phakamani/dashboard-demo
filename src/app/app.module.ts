import { CommonModule } from '@angular/common';
import { TransactionComponent } from './modules/transaction/transaction.component';
import { HomeComponent } from './modules/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondaryGraphComponent } from './modules/secondary-graph/secondary-graph.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    HomeComponent,
    SecondaryGraphComponent
  ],
  exports: [
    TransactionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FlexLayoutModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
