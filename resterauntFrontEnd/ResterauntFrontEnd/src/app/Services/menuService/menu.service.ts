import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { MenuResponse } from '../../Models/menuResponse';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  private apiURL = "http://localhost:8080/auth/menu";

  public getMenu(): Observable<MenuResponse> {
    return this.http.post<MenuResponse>(this.apiURL,null);
  }


}
