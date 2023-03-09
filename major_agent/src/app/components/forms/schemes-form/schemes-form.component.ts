import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SchemesService } from 'src/app/services/schemes/schemes.service';

@Component({
  selector: 'app-schemes-form',
  templateUrl: './schemes-form.component.html',
  styleUrls: ['./schemes-form.component.css']
})
export class SchemesFormComponent {

  constructor(private schemes:SchemesService) { }

  userSchemesValidation = new FormGroup({
    'name' : new FormControl('', Validators.required),
    'description' : new FormControl('', Validators.required)
  });

  onSubmitSchemes() {
    if(this.userSchemesValidation.valid) {
      this.schemes.createSchemesUser(this.userSchemesValidation.value).subscribe((details) => {
        console.log(details+"Schemes Details...");
      })
    }
  }

}
