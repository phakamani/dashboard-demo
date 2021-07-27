import { UiComponentsModule } from './ui-components/ui-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UiComponentsModule

  ],
  exports: [
    UiComponentsModule
  ]
})
export class SharedModule { }
