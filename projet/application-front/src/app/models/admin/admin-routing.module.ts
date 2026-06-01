import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "../../guard/auth.guard";
import {AdminGuard} from "../../guard/admin.guard";
import {AdminComponent} from "./admin/admin.component";

const routes: Routes = [
  {
    path: 'admin', children: [
    {
      path: '',
      component: AdminComponent,
      canActivate: [AuthGuard, AdminGuard]
    }
  ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
