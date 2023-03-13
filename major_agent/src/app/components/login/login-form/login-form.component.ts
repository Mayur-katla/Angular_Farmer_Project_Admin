import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private agent:AgentService) {}

  userValidationAgent = new FormGroup({
    'firstname' : new FormControl('', Validators.required),
    'lastname' : new FormControl('', Validators.required),
    'email' : new FormControl('', Validators.required),
    'password' : new FormControl('', Validators.required),
    'phonenumber' : new FormControl('', Validators.required),
    'gender' : new FormControl('', Validators.required),
    'address' : new FormControl('', Validators.required),
    'description' : new FormControl('', Validators.required),
    'reference' : new FormControl('', Validators.required)
  })

  onSubmitAgent() {
    if(this.userValidationAgent.valid){
      this.agent.createAgentData(this.userValidationAgent.value).subscribe((details) => {
        console.log(details.data);        
      })
    }
  }

  ngOnInit(): void {
    
  }
}
