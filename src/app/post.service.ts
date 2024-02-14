import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { Observable } from 'rxjs';
import { Post } from './Post';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _url= 'http://localhost:3000/posts';
  constructor(private http:HttpClient) { }
  getAllPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this._url)
  }
}
