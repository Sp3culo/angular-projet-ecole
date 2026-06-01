import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorPageComponent} from "./models/error-page/error-page/error-page.component";
import {HomeComponent} from "./models/home-page/home/home.component";
import {GeneralKnowledgeModule} from "./models/general-knowledge/general-knowledge.module";
import {AdminModule} from "./models/admin/admin.module";

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'admin',  component: AdminModule},
  { path: 'admin', loadChildren: () => AdminModule},
  { path: 'general-knowledge', loadChildren: () => GeneralKnowledgeModule},
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
