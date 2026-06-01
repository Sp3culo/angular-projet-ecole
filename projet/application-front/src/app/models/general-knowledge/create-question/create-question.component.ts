import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";
import {KnowledgeService} from "../../../services/knowledge.service";
import {OnlineStatusService} from "../../../services/online-status.service";
import {Subscription} from "rxjs";

interface IResult {
  message: string;
  error: boolean ;
  success: boolean ;
}

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss']
})
export class CreateQuestionComponent implements OnInit {
  toaster : boolean = false;
  result : IResult = {message: "", error: false, success: false};
  createSubscribe!: Subscription;
  isOnline: boolean = true;

  reactiveKnowledgeForm = this.fb.group({
    question: ["", [Validators.required, Validators.minLength(10)]],
    answers: this.fb.array([]),
  })

  myReactiveKnowledgeFormAnswers() {
    return (this.reactiveKnowledgeForm.get('answers')! as FormArray);
  }
  constructor(
    private fb: FormBuilder,
    private knowledgeService: KnowledgeService,
    private onlineStatusService: OnlineStatusService) { }

  ngOnInit(): void {
    this.addNewResponse();
    if(!this.createSubscribe) {
      this.createSubscribe = this.onlineStatusService.connectionChanged.subscribe(isOnline => {
        if(isOnline) {
          this.isOnline = true;
        } else{
          this.isOnline=false;
        }
      });
    }
  }

  ngOnDestroy(): void{
    if(this.createSubscribe) {
      this.createSubscribe.unsubscribe();
    }
  }

  handleSubmit () {
    this.knowledgeService
      .createKnowledge({ ...this.reactiveKnowledgeForm.value})
      .subscribe(result => {
        this.result = result
        this.toaster = true;
      });

    this.reactiveKnowledgeForm.reset();
    this.toaster = false;
  }

  addNewResponse() {
    const newResponse = this.fb.group({
      label: ["", [Validators.required, Validators.minLength(4)]],
      correct: ["", [Validators.required]],
    });
    this.myReactiveKnowledgeFormAnswers().push(newResponse);
  }
  deleteNewResponse(index: number) {
    if (this.myReactiveKnowledgeFormAnswers().length > 1){
      this.myReactiveKnowledgeFormAnswers().removeAt(index);
    }else{
      alert("Une question doit avoir une mois une réponse")
    }
  }
}
