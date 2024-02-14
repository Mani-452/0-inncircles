import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { PostComponent } from './post/post.component';
import { SeePostsComponent } from './see-posts/see-posts.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'post', component: PostComponent },
  { path: 'seeposts', component: SeePostsComponent },
  { path: 'seeposts/comments/:id', component:CommentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
