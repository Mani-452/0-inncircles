import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GettitleService {
  _url="http://localhost:3000/title"
  constructor(private _http:HttpClient) { 

    }
    getPostId(data:any):Observable<{id:string}>{
      return this._http.post<{id:string}>(this._url,data)
    }
}

