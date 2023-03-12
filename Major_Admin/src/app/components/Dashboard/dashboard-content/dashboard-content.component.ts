import { Component, OnInit } from '@angular/core';
import { CropsService } from 'src/app/services/crops_services/crops.service';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css']
})
export class DashboardContentComponent implements OnInit {

  constructor(private crops: CropsService) { }

  crops_count:any;
  product_count:any;
  schemes_count:any;

  ngOnInit(): void {
    this.crops.getCropsCount().subscribe((details) => {
      this.crops_count = details.data;
      console.log(details.data);
    })
    this.crops.getProductCount().subscribe((details) => {
      this.product_count = details.data;
    })
    this.crops.getSchemesCount().subscribe((details) => {
      this.schemes_count = details.data;
    })
  }
}
