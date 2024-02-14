import { Component } from '@angular/core';
import { Validators,FormBuilder } from '@angular/forms';
import { CheckUserService } from '../check-user.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  id:any
  data:any
  istate=false
  state=true
  constructor(private fb1:FormBuilder,private checkIt:CheckUserService,private http:HttpClient){
  }
  b:boolean=false
  exist:boolean=false
  postForm=this.fb1.group({
    userName:['',[Validators.required,Validators.minLength(4)]],
    title:['',[Validators.required]],
    desc:['',[Validators.required]]
  });
  checkUser(){
    this.b=true
    this.checkIt.check({userName: this.postForm.get('userName')?.value})
    .subscribe(
    (result)=>{
      this.exist=result.exists,
      this.id=result.userid
      }
    )
  }
  onPost(){
    this.istate=true
    this.state=false
    this.data={
      userid:this.id,
      title:this.postForm.get('title')?.value,
      desc:this.postForm.get('desc')?.value
    }
    this.http.post<any>("http://localhost:3000/posted",this.data)
    .subscribe( )
  }
}
