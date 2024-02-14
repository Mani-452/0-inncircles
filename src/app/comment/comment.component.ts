import { Component } from '@angular/core';
import { Validators,FormBuilder } from '@angular/forms';
import { CheckUserService } from '../check-user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SeePostsComponent } from '../see-posts/see-posts.component';
import { Location } from '@angular/common';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  id:any
  data:any
  constructor(
    private fb1:FormBuilder,
    private checkIt:CheckUserService,
    private http:HttpClient,
    private router:Router,
    private location:Location){
  }
  b:boolean=false
  exist:boolean=false
  commentForm=this.fb1.group({
    userName:['',[Validators.required,Validators.minLength(4)]],
    comment:['',[Validators.required]]
  });
  checkUser(){
    this.b=true
    this.checkIt.check({userName: this.commentForm.get('userName')?.value})
    .subscribe(
    (result)=>{
      this.exist=result.exists,
      this.id=result.userid
      }
    )
  }
  onComment(){
    const _url=document.URL
    const parts = _url.split("/");
    const id = parts[parts.indexOf("comments") + 1];
    this.data={
      userid:this.id,
      comment:this.commentForm.get('comment')?.value,
      postid:id
    }
    this.http.post<any>("http://localhost:3000/comment",this.data)
    .subscribe( )
    this.location.back()
  }
}

