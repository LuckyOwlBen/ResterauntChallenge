import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { MenuResponse } from '../../Models/menuResponse';
import { AddToMenuResponse } from '../../Models/addToMenuResponse';
import { AddToMenuRequest } from '../../Models/addToMenuRequest';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  private apiURL = "http://localhost:8080/auth";
  private menuURI = "/menu";
  private addMenuURI = "/addMenu"

  public getMenu(): Observable<MenuResponse> {
    return this.http.post<MenuResponse>(this.apiURL + this.menuURI,null);
  }

  public addToMenu(addToMenuRequest: AddToMenuRequest): Observable<AddToMenuResponse> {
    return this.http.post<AddToMenuResponse>(this.apiURL + this.addMenuURI, addToMenuRequest);
  }




}
