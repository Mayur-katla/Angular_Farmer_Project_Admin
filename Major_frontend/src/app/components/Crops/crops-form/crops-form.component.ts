import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CropsServicesService } from 'src/app/services/crops_services/crops-services.service';

@Component({
  selector: 'app-crops-form',
  templateUrl: './crops-form.component.html',
  styleUrls: ['./crops-form.component.css']
})

export class CropsFormComponent implements OnInit{

  cropsValidation = new FormGroup(
    {
      'crops_name' : new FormControl('', Validators.required),
      'crops_type' : new FormControl('', Validators.required),
      'crops_about' : new FormControl('', Validators.required),
      'crops_climate' : new FormControl('', Validators.required),
      'crops_history' : new FormControl('', Validators.required),
      'crops_soil' : new FormControl('', Validators.required),
      'crops_nutrition' : new FormControl('', Validators.required),
      'crops_fertilizer' : new FormControl('', Validators.required),
      'crops_commercial' : new FormControl('', Validators.required),
    }
  )

  constructor(private crops:CropsServicesService){}

  onCrops():void {
    if(this.cropsValidation.valid){
      this.crops.createCrops(this.cropsValidation.value).subscribe((details) => {
        console.log(details);        
      })
    }else {
      console.log("Enter all fields...");
    }
  }

  ngOnInit(): void {
    
  }
}
