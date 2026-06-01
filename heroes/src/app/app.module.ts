import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeroesModule} from "./heroes/heroes.module";
import {CounterModule} from "./counter/counter.module";
import {DateModule} from "./date/date.module";
import {FormTittleModule} from "./form-tittle/form-tittle.module";
import {FormReactiveModule} from "./form-reactive/form-reactive.module";
import {InjectionModule} from "./injection/injection.module";
import {DirectiveModule} from "./directive/directive.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    CounterModule,
    FormTittleModule,
    DateModule,
    FormReactiveModule,
    InjectionModule,
    DirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
