import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {URL_USER} from "./config.url";
import {HttpClient} from "@angular/common/http";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private httpService : HttpService) { }

  getAllUsers(): Observable<any> {
      const headers = this.httpService.setHeader()
      return this.http.get(URL_USER+"/all", {headers});
  }
}
