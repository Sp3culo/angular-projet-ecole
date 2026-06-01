import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    FormReactiveComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormReactiveComponent
  ]
})
export class FormReactiveModule { }
