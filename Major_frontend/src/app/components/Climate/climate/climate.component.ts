import { Component, OnInit } from '@angular/core';
import { ClimateService } from 'src/app/services/climate_services/climate.service';
// import { Weather } from 'src/app/models/models';

@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.css']
})
export class ClimateComponent implements OnInit {

  constructor(private climate: ClimateService){}

  ngOnInit(): void {
    // this.climate.getWeatherData("surat").subscribe((details) => {
    //   console.log(details);      
    // })
  }
}
