import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InjectionComponent } from './injection/injection.component';
import {HeroService} from "./hero.service";



@NgModule({
  declarations: [
    InjectionComponent

  ],
  imports: [
    CommonModule,
  ],
  providers: [
    HeroService
  ]
})
export class InjectionModule { }
