import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../Post';
import { DatePipe } from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent} from '../dialog/dialog.component';
@Component({
  selector: 'app-see-posts',
  templateUrl: './see-posts.component.html',
  styleUrl: './see-posts.component.css'
})
export class SeePostsComponent {
  id: any
  posts: Post[] = [];
  constructor(
    private postService: PostService,
    private dialog:MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchPosts();
   
  }
  fetchPosts(): void {

    this.postService.getAllPosts().subscribe(res => {
    this.posts = res
    })
  }
  handleButtonClick(useridin:object,c:boolean=false,id:string):void{
    let dialogRef=this.dialog.open(DialogComponent,{
      width:'500px',
      height:'300px',
      panelClass:'DialogComponent',
      data:{useridIn:useridin,cblock:c,postId:id},

    });
  }
}
