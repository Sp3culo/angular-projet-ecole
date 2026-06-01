import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {URL_USER, URL_USER_ADMIN, URL_USER_RESPONSE_ADD, URL_USER_WITH_ID} from "./config.url";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private httpService : HttpService) { }

  signIn(data: any): Observable<any>{
    return this.http.post(URL_USER, data);
  }

  deleteAccount(): Observable<any>{
    const headers = this.httpService.setHeader()
    return this.http.delete(URL_USER, {
      headers,
    });
  }

  deleteAccountById(id: number): Observable<any>{
    const headers = this.httpService.setHeader()

    return this.http.delete(URL_USER_WITH_ID, {
      headers,
      body : {
        id
      }
    });
  }

  updateAdminByUserId(id: number): Observable<any>{
    const headers = this.httpService.setHeader()

    return this.http.delete(URL_USER_ADMIN, {
      headers,
      body : {
        id
      }
    });
  }

  getAnswerIdList(): Observable<any>{
    const headers = this.httpService.setHeader()
    return this.http.get(URL_USER, {
      headers,
    });
  }

  addNewResponse(data: any): Observable<any>{
    return this.http.post(URL_USER_RESPONSE_ADD, data);
  }
}
