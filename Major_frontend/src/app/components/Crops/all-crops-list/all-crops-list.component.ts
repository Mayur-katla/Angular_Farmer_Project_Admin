import { Component, OnInit } from '@angular/core';
import { CropsServicesService } from 'src/app/services/crops_services/crops-services.service';

@Component({
  selector: 'app-all-crops-list',
  templateUrl: './all-crops-list.component.html',
  styleUrls: ['./all-crops-list.component.css']
})
export class AllCropsListComponent implements OnInit{
  crop_name_type: any;
  constructor(private crops: CropsServicesService) {}
  
  ngOnInit(): void {
    this.crops.getCropsDetails().subscribe((details) => {
      this.crop_name_type = details.data;
    })
  }
}
