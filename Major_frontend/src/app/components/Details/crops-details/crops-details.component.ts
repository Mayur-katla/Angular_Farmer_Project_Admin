import { Component,OnInit } from '@angular/core';
import { CropsServicesService } from 'src/app/services/crops_services/crops-services.service';

@Component({
  selector: 'app-crops-details',
  templateUrl: './crops-details.component.html',
  styleUrls: ['./crops-details.component.css']
})
export class CropsDetailsComponent implements OnInit {
  crops_details: any;

  constructor(private crops:CropsServicesService) {}

  cropDelete(singleCrop:any) {
    this.crops.deleteCropsDetails(singleCrop).subscribe((details) => {
      console.log(details.data);
      console.log("Deleted Crops Details");
    })
    alert("SuccessFully Deleted Crops Deleted...");
  }

  ngOnInit(): void {
    this.crops.getCropsDetails().subscribe((details) => {
      this.crops_details = details.data;
      console.log(details.data);      
    })
  }
}
