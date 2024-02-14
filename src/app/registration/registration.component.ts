import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { PasswordValidator } from '../shared/password.validator';
import { DateValidator } from '../shared/date.validator';
import { RegistrationService } from '../registration.service';
import { TimeValidator } from '../shared/time.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  constructor(private fb:FormBuilder ,private _registrationService:RegistrationService,private router:Router){
  }
  isOnline:boolean=false;
  isOffline:boolean=false;
  public state=true;
  public istate=false;
  private emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  registrationForm=this.fb.group({
    userName:['',[Validators.required,Validators.minLength(4)]],
    email:['',[Validators.required,Validators.pattern(this.emailPattern
      )]],
    password:['',[Validators.required]],
    confirmPassword:['',[Validators.required]],
    address:this.fb.group({
      city:[''],
      state:[''],
      postalCode:[''],
    }),
    visitType:['',[Validators.required]],
    date:[''],
    time:[''],
    Email:['']
},{validator: PasswordValidator});

onVisitTypeChange() {
  const visitType = this.registrationForm.get('visitType')?.value;
  if (visitType === 'online') {
    this.isOnline = true;
    this.isOffline=false;
    this.registrationForm.get('date')?.setValidators([Validators.required,DateValidator]);
    this.registrationForm.get('time')?.setValidators([Validators.required,TimeValidator]);
    this.registrationForm.get('Email')?.setValidators([Validators.required, Validators.pattern(this.emailPattern)]);
  } 
  else {
    this.isOffline = true;
    this.isOnline=false;
    this.registrationForm.get('date')?.setValidators([Validators.required,DateValidator]);
    this.registrationForm.get('time')?.setValidators([]);
    this.registrationForm.get('time')?.setValue("")
    this.registrationForm.get('Email')?.setValue("")
    this.registrationForm.get('Email')?.setValidators([]);
  }
  this.registrationForm.get('date')?.updateValueAndValidity();
  this.registrationForm.get('time')?.updateValueAndValidity();
  this.registrationForm.get('Email')?.updateValueAndValidity();
}

  onSubmit(){
    this.state=false
    this.istate=true
    this._registrationService.register(this.registrationForm.value)
    .subscribe(
      response=>console.log('success!',response),
      error=>console.error('Error!',error)
    )
  }
}
