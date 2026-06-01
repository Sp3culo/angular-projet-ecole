import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ErrorPageComponent } from './error-page/error-page.component';



@NgModule({
  declarations: [
    ErrorPageComponent
  ],
    imports: [
        CommonModule,
        NgOptimizedImage
    ]
})
export class ErrorPageModule { }
