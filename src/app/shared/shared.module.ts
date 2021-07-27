import { UiComponentsModule } from './ui-components/ui-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomBreakPointsModule } from './custom-breakpoints/custom-breakpoints.module'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UiComponentsModule,
    CustomBreakPointsModule

  ],
  exports: [
    UiComponentsModule,
    CustomBreakPointsModule
  ]
})
export class SharedModule { }
