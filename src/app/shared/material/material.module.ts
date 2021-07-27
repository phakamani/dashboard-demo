import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatNativeDateModule
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule
  ]
})
export class MaterialModule { }
