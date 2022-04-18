import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Emitters } from 'src/app/emitters/emitters';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  infoForm!: FormGroup;
  passwordForm!:FormGroup;
  constructor(
    private fb:FormBuilder,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.infoForm=this.fb.group({
      firstName:'',
      lastName:'',
      email:''
    });
    this.passwordForm=this.fb.group({
      password:'',
      confirmPassword:''
    })
    Emitters.authEmitter.subscribe(user=>{
      this.infoForm.patchValue(user)
    })
  }
  submitInfo():void{
    this.authService.updateInfo(this.infoForm.getRawValue()).subscribe(user=>{
      Emitters.authEmitter.emit(user)
    })
  }
  submitPassword():void{
    this.authService.updatePassword(this.passwordForm.getRawValue()).subscribe(user=>{
      console.log(user)
    })
  }
}
