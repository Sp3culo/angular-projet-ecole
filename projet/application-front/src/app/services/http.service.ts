import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  setHeader() {
    const token = sessionStorage.getItem("token");

    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'content-type': 'application/json',
    });
  }
}
