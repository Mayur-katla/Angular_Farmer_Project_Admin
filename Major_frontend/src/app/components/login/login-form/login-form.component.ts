import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/services/signup_services/signup.service';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{
  constructor(private _login: SignupService){}

  userValidationLogin = new FormGroup({
    "email" : new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required)
  })

  onLogin(){
    if (this.userValidationLogin.invalid) {
      return;
    }
    this._login.login(this.userValidationLogin.value.email, this.userValidationLogin.value.password);
  }

  ngOnInit(): void {
    
  }
}
