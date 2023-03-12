import { Component, OnInit } from '@angular/core';
import { CropsService } from 'src/app/services/crops_services/crops.service';

@Component({
  selector: 'app-crops-content',
  templateUrl: './crops-content.component.html',
  styleUrls: ['./crops-content.component.css']
})
export class CropsContentComponent implements OnInit {

  constructor(private crops: CropsService ){}

  kharif_count:any;
  rabi_count:any;
  zaid_count:any;

  ngOnInit(): void {
    this.crops.getCropsCountRabi().subscribe((details) => {
      this.rabi_count = details.data;
    })
    this.crops.getCropsCountKharif().subscribe((details) => {
      this.kharif_count = details.data;
    })
    this.crops.getCropsCountZaid().subscribe((details) => {
      this.zaid_count = details.data;
    })
  }
}
