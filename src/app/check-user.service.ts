import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CheckUserService {
  _url = "http://localhost:3000/check"

  constructor(private _http: HttpClient) { }

  check(userData: any):Observable<{exists: boolean,userid: string}>{
    return this._http.post<{ exists: boolean, userid: string }>(this._url, userData)
  }
}
