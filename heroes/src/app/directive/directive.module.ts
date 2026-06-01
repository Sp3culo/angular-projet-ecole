import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './directive/directive.component';
import { CustomDirectiveDirective } from './custom-directive.directive';



@NgModule({
  declarations: [
    DirectiveComponent,
    CustomDirectiveDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DirectiveModule { }
