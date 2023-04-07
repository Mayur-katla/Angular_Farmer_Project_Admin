import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/services/signup_services/signup.service';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor(private _signup:SignupService){}

  userValidationSignup = new FormGroup(
    {
    'fullname': new FormControl("", Validators.required),
    'mobileno': new FormControl("", Validators.required),
    'gender': new FormControl("", Validators.required),
    'email': new FormControl("", Validators.required),
    'password': new FormControl("", Validators.required),
    'address': new FormControl("", Validators.required),
    'pincode': new FormControl("", Validators.required),
    }
  )

  onSignup(){
    if(this.userValidationSignup.valid){
      this._signup.createSignup(this.userValidationSignup.value).subscribe((details) => {
        console.log(details);
      })
    }
    this._signup.signup(this.userValidationSignup.value.email, this.userValidationSignup.value.password);
  }

  ngOnInit(): void {

  }
}
