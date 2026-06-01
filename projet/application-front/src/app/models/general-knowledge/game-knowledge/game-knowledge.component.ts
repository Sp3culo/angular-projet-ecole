import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {KnowledgeService} from "../../../services/knowledge.service";
import {OnlineStatusService} from "../../../services/online-status.service";
import {forkJoin, Observable, Subscription} from "rxjs";
import {UserService} from "../../../services/user.service";
import {IGeneralResponse} from "../../../../../../shared";
import { db } from 'src/indexed.db';

interface IQuestion {
  label: string,
  id: number,
  reponses: {
    id: number,
    label: string,
    correct: boolean,
  }[]
}
@Component({
  selector: 'app-game-knowledge',
  templateUrl: './game-knowledge.component.html',
  styleUrls: ['./game-knowledge.component.scss']
})
export class GameKnowledgeComponent implements OnInit {

  questions: IQuestion[] = [];
  currentQuestion: IQuestion | null = null;
  answerInterface : IGeneralResponse | null = null;
  gameSubscribe!: Subscription;
  isOnline: boolean = true;
  idQuestionsAlreadyAnswered : number[] = [];

  constructor(private knowledgeService : KnowledgeService, private onlineStatusService: OnlineStatusService, private UserService: UserService) { }
  ngOnInit(): void {
  this.loadQuestions();

    if(!this.gameSubscribe) {
      this.gameSubscribe = this.onlineStatusService.connectionChanged.subscribe(isOnline => {
        if (isOnline) {
          this.knowledgeService.getQuestion().subscribe(response => {
            this.questions = response?.reponse;
            this.currentQuestion = response?.reponse[0];
            db.questions.clear();
            db.questions.bulkAdd(response?.reponse);
          });
          this.isOnline = true;
        } else {
          this.listAllQuestions().then(v => {
            this.questions = v;
            this.currentQuestion = (v && v.length > 0 ? v[0] : null);
           })
          this.isOnline = false;
        }
      });
    }
  }

  async listAllQuestions(): Promise<Array<IQuestion>> {
    return db.questions
      .where({})
      .toArray();
  }

  loadQuestions(): void {
    this.UserService.getAnswerIdList().subscribe(response => {
      const observables = response[0].culture_reponses.map((culture_reponse: any) => {
        return this.knowledgeService.getOneResponse(culture_reponse.id);
      });

      if(observables.length > 0){
        forkJoin(observables as Observable<any>[]).subscribe((responses: any[]) => {
          responses.forEach(response => {
            if (response.reponse.question.id && this.idQuestionsAlreadyAnswered.indexOf(response.reponse.question.id) === -1) {
              let idQuestion = response.reponse.question.id;
              this.idQuestionsAlreadyAnswered.push(idQuestion);
            }
          });


          this.knowledgeService.getFilteredQuestions(this.idQuestionsAlreadyAnswered).subscribe(response => {

            if (response.response != null){
              this.questions = response.response;
            }
            this.currentQuestion = this.questions.length > 0 ? this.questions[0] : null;
          });
        });
      }else{
        this.knowledgeService.getQuestion().subscribe(response => {
          this.questions = response.reponse;
          this.currentQuestion = this.questions.length > 0 ? this.questions[0] : null;
        });
      }
    });
  }


  handleSubmit (id: number | undefined) {
    if (id) {
      const idUser = localStorage.getItem('id');
      this.UserService.addNewResponse({idUser, idResponse: id}).subscribe(response => {
        this.loadQuestions();
      });
    }
  }

  ngOnDestroy(): void {
    if (this.gameSubscribe) {
      this.gameSubscribe.unsubscribe();
    }
  }

  private sendItemsFromIndexedDb(item: IQuestion) {
  }
}
