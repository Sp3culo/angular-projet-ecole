import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {GameKnowledgeComponent} from "./game-knowledge/game-knowledge.component";
import {CreateQuestionComponent} from "./create-question/create-question.component";
import {AdminGuard} from "../../guard/admin.guard";
import {AuthGuard} from "../../guard/auth.guard";


const routes: Routes = [
  {
    path: 'general-knowledge', children: [
    {
      path: 'create',
      component: CreateQuestionComponent,
      canActivate: [AuthGuard, AdminGuard]
    },
    {
      path: '', component: GameKnowledgeComponent
    }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnowledgeRoutingModule { }
