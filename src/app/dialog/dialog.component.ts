import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CheckUserService } from '../check-user.service';
import { Validators,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  b=false
  exist=false
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:{useridIn:object,cblock:boolean,postId:string},
    private fb2:FormBuilder,
    private checkIt:CheckUserService,
    private http:HttpClient,
    public dialogRef:MatDialogRef<DialogComponent>
  ){
    this.delForm.get('userName')?.valueChanges.subscribe(value => {
      this.data_to_give.userName = value ?? '';
    });
  }
  
  delForm=this.fb2.group({
    userName:['',[Validators.required,Validators.minLength(4)]]
  })
  public data_to_give={
    userName: '',
    useridIn:this.data.useridIn,
    c:this.data.cblock,
    postid:this.data.postId
  }
  checkUser(){
    this.b=true
    console.log(this.data_to_give)
    this.checkIt.check(this.data_to_give)
    .subscribe(
    (result)=>{
      this.exist=result.exists
      }
    )
  }
  ondel():void{
    this.http.post<any>("http://localhost:3000/del",this.data_to_give)
    .subscribe();
    this.dialogRef.close()
  }
}
