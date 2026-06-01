import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameKnowledgeComponent } from './game-knowledge/game-knowledge.component';
import {KnowledgeRoutingModule} from "./knowledge-routing.module";
import { CreateQuestionComponent } from './create-question/create-question.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ComponentsModule} from "../components/components.module";



@NgModule({
  declarations: [
    GameKnowledgeComponent,
    CreateQuestionComponent,
  ],
  imports: [
    CommonModule,
    KnowledgeRoutingModule,
    ReactiveFormsModule,ComponentsModule
  ],
  exports: [CreateQuestionComponent]
})
export class GeneralKnowledgeModule { }
