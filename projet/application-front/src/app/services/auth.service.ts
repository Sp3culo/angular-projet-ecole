import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AUTH_URL} from "./config.url";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = new BehaviorSubject<boolean>(false)
  private admin = new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(AUTH_URL,data);
  }

  logout() {
    sessionStorage.clear();
  }

  isAuth(): boolean {
    return !!sessionStorage.getItem("token");
  }


  isAdmin(): boolean {
    return sessionStorage.getItem("admin") === "true";
  }
}
