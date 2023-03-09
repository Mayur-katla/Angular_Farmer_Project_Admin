import { Component, OnInit } from '@angular/core';
import { CropsServicesService } from 'src/app/services/crops_services/crops-services.service';

@Component({
  selector: 'app-crops-content',
  templateUrl: './crops-content.component.html',
  styleUrls: ['./crops-content.component.css']
})

export class CropsContentComponent implements OnInit {
  rabi_crops_details: any;

  constructor(private crops:CropsServicesService) {}

  ngOnInit(): void {
    this.crops.getRabiCropsDetails().subscribe((details) => {
      this.rabi_crops_details = details.data;
    })
  }
}
