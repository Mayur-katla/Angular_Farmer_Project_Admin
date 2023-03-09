import { Component, OnInit } from '@angular/core';
import { CommitService } from 'src/app/services/commit/commit.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})

export class MessageFormComponent implements OnInit{

  constructor(private commit: CommitService) {}

  userCommitValidation = new FormGroup({
    'name': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'insert': new FormControl('', Validators.required),
    'type': new FormControl('', Validators.required),
    'message': new FormControl('', Validators.required)
  })

  onCommitUser() {
    if(this.userCommitValidation.valid) {
      this.commit.createCommitData(this.userCommitValidation.value).subscribe((details) => {
        console.log(details, "Commited successfully...");
      })
    }
  }


  ngOnInit(): void {
    
  }

}
