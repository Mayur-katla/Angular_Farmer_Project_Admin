import { Component } from '@angular/core';
import { CropsService } from 'src/app/services/crops_services/crops.service';

@Component({
  selector: 'app-zaid-details',
  templateUrl: './zaid-details.component.html',
  styleUrls: ['./zaid-details.component.css']
})
export class ZaidDetailsComponent {
  zaid_details: any;
  constructor(private crops:CropsService){}

  onDeleteCrops(crops:any){
    this.crops.deleteCropDetails(crops).subscribe((details) => {
      console.log(details.data);      
    })
    alert("SuccessFully Deleted Crops...");
  }

  ngOnInit(): void {
    this.crops.getCropsZaidDetails().subscribe((details) => {
      this.zaid_details = details.data;
      console.log(details.data);
    })
  }
}
