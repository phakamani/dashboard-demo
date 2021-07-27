import { MaterialModule } from './../material/material.module';
import { InputComponent } from './input/input.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ButtonComponent } from './button/button.component';
import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

@NgModule({
  declarations: [
    ButtonComponent,
    FormComponent,
    DropdownComponent,
    InputComponent,
    FilterComponent,
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    ReactiveFormsModule,
    ButtonComponent,
    MaterialModule,
    FormComponent,
    DropdownComponent,
    InputComponent,
    FilterComponent,
    DatePickerComponent
  ]
})
export class UiComponentsModule { }
