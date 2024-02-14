import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { PostComponent } from './post/post.component';
import { SeePostsComponent } from './see-posts/see-posts.component';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment/comment.component';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    PostComponent,
    SeePostsComponent,
    CommentComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
