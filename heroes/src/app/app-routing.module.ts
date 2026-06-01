import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroesListComponent} from "./heroes/heroes-list/heroes-list.component";
import {CounterPageComponent} from "./counter/counter-page/counter-page.component";
import {FormComponent} from "./form-tittle/form/form.component";
import {DatePipeComponent} from "./date/date-pipe/date-pipe.component";
import {FormReactiveComponent} from "./form-reactive/form-reactive/form-reactive.component";
import {NotFoundPageComponent} from "./not-found/not-found-page/not-found-page.component";
import {InjectionComponent} from "./injection/injection/injection.component";
import {DirectiveComponent} from "./directive/directive/directive.component";

const routes: Routes = [
  { path: 'heroes/list', component: HeroesListComponent },
  { path: 'counter', component: CounterPageComponent },
  { path: 'form-reactive', component: FormReactiveComponent },
  { path: 'form', component: FormComponent },
  { path: 'pipe', component: DatePipeComponent },
  { path: 'injection', component: InjectionComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

