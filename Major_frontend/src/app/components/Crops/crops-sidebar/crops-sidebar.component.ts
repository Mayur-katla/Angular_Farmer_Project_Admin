import { Component, OnInit } from '@angular/core';
import { CropsServicesService } from 'src/app/services/crops_services/crops-services.service';

@Component({
  selector: 'app-crops-sidebar',
  templateUrl: './crops-sidebar.component.html',
  styleUrls: ['./crops-sidebar.component.css']
})

export class CropsSidebarComponent implements OnInit {
  rabi_links: any;
  kharif_links: any;
  zaid_links: any;
  
  constructor(private crops: CropsServicesService) { }

  ngOnInit(): void {
    this.crops.getRabiLinks().subscribe((details) => {
      this.rabi_links = details.data;
    })

    this.crops.getKharifLinks().subscribe((details) => {
      this.kharif_links = details.data;
    })

    this.crops.getZaidLinks().subscribe((details) => {
      this.zaid_links = details.data;
    })
  }

}

