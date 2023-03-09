import { Component, OnInit } from '@angular/core';
import { CropsServicesService } from 'src/app/services/crops_services/crops-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-crops',
  templateUrl: './single-crops.component.html',
  styleUrls: ['./single-crops.component.css']
})
export class SingleCropsComponent implements OnInit {
  single_crop_details: any;
  name:any;
  
  constructor(private crops: CropsServicesService, private route:ActivatedRoute) {}
  ngOnInit(): void {
    // this.route.params.subscribe((name_params) => {
    //   this.name = name_params;                
    // })

    this.name = this.route.snapshot.paramMap.get('name');

    this.crops.getSingleCropsDetails(this.name).subscribe((details) => {
      this.single_crop_details = details.data;
      console.log(details.data);      
    })  
  }
}
