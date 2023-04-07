import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  constructor(private _login: AgentService){}

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
