import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable} from "rxjs";
import {URL_KNOWLEDGE_FILTERED, URL_KNOWLEDGE_RESPONSE, URL_KNWOLEDGE} from "./config.url";
import {HttpService} from "./http.service";


interface IKnowledgeForm {
  question: string | null | undefined;
  answers: IReponse[]
}

interface IReponse {
  label: string | null | undefined;
  correct: boolean ;
}

@Injectable({
  providedIn: 'root'
})
export class KnowledgeService {

  constructor(private http: HttpClient,  private httpService : HttpService) { }

  createKnowledge(data: any): Observable<any>{
    const headers = this.httpService.setHeader()
    return this.http.post(URL_KNWOLEDGE, data, {headers});
  }

  getQuestion(id: number | null = null): Observable<any>{
    if(id){
    return this.http.get(URL_KNWOLEDGE+"/"+id)
    }
    return this.http.get(URL_KNWOLEDGE);
  }

  getOneResponse(id: number | null = null): Observable<any>{
    return this.http.get(URL_KNOWLEDGE_RESPONSE+"/"+id)
  }

  getFilteredQuestions(excludeIds: number[]): Observable<any> {
    let params = new HttpParams();
    params = params.append('exclude', excludeIds.join(','));
    return this.http.get(URL_KNOWLEDGE_FILTERED, { params });
  }
}
