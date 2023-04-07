import { Component, OnInit } from '@angular/core';
import { CropsService } from 'src/app/services/crops_services/crops.service';

@Component({
  selector: 'app-rabi-details',
  templateUrl: './rabi-details.component.html',
  styleUrls: ['./rabi-details.component.css']
})
export class RabiDetailsComponent implements OnInit {
  rabi_details: any;
  constructor(private crops:CropsService){}

  onDeleteCrops(crops:any){
    this.crops.deleteCropDetails(crops).subscribe((details) => {
      console.log(details.data);      
    })
    alert("SuccessFully Deleted Crops...");
  }

  ngOnInit(): void {
    this.crops.getCropsRabiDetails().subscribe((details) => {
      this.rabi_details = details.data;
      // console.log(details.data);
    })
  }
}
