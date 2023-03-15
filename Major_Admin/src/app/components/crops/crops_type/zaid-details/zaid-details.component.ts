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

  ngOnInit(): void {
    this.crops.getCropsZaidDetails().subscribe((details) => {
      this.zaid_details = details.data;
      console.log(details.data);
    })
  }
}
