import { Component, OnInit } from '@angular/core';
import { CropsService } from 'src/app/services/crops_services/crops.service';

@Component({
  selector: 'app-kharif-details',
  templateUrl: './kharif-details.component.html',
  styleUrls: ['./kharif-details.component.css']
})
export class KharifDetailsComponent implements OnInit {
  kharif_details: any;
  constructor(private crops:CropsService){}

  onDeleteCrops(crops:any){
    this.crops.deleteCropDetails(crops).subscribe((details) => {
      console.log(details.data);      
    })
    alert("SuccessFully Deleted Crops...");
  }

  ngOnInit(): void {
    this.crops.getCropsKharifDetails().subscribe((details) => {
      this.kharif_details = details.data;
      // console.log(details.data);
    })
  }
}
