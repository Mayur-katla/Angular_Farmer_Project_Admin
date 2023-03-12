import { Component, OnInit } from '@angular/core';
import { ClimateService } from 'src/app/services/climate_services/climate.service';

@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.css']
})
export class ClimateComponent implements OnInit {

  constructor(private climate: ClimateService){}

  ngOnInit(): void {
    
  }
}
