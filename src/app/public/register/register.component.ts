import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss','./../public.component.scss']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup; 
  constructor(
    private fb: FormBuilder,
    private authService:AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      confirmPassword:''
    })
  }
  submit():void{
    this.authService.register(this.form.getRawValue()).subscribe(
      ()=>this.router.navigate(['/login'])
    )
  }

}
