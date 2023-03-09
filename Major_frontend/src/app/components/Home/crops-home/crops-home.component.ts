import { Component, OnInit } from '@angular/core';
import { CropsServicesService } from 'src/app/services/crops_services/crops-services.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crops-home',
  templateUrl: './crops-home.component.html',
  styleUrls: ['./crops-home.component.css']
})
export class CropsHomeComponent implements OnInit {
  
  userSingleCropsValidation = new FormGroup({
    'crop_name' : new FormControl('', Validators.required)
  })
  crop_single: any;

  constructor(private crops:CropsServicesService) {}  

  crop_name:any = this.userSingleCropsValidation.value.crop_name;

  onSingleCropsDetails() {
  //   if(this.userSingleCropsValidation.valid) {
  //     this.crops.getSingleCrop(this.userSingleCropsValidation.value).subscribe((details) => {
  //       // this.crop_single = details.data;
  //       // console.log(details + "Hello Crops single...");
  //     })
  //   }
  //   else {
  //     console.log("Enter All fields...");
      
  //   }

  //   console.log(this.userSingleCropsValidation.value.crop_name);
    
  }

  ngOnInit(): void {
    
  }
}
