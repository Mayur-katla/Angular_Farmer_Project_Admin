import { Component, OnInit } from '@angular/core';
import { ClimateService } from 'src/app/services/climate_services/climate.service';
import { LoginFormComponent } from '../../login/login-form/login-form.component';
// import { Weather } from 'src/app/models/models';

@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.css']
})
export class ClimateComponent implements OnInit {

  constructor(private climate: ClimateService){}

  wind:any;
  temperature:any;
  humidity:any;
  heat:any;

  season = ["Rabi", "Kharif", "Zaid"];
  sun = ["North-West", "South-East", "West-South", "North-East", "East-North", "West-North"];
  s1:any;
  h1:any;

  demo(){
    console.log("hEllo");
  }

  ngOnInit(): void {
    // this.climate.getWeatherData("surat").subscribe((details) => {
    //   console.log(details);      
    // })

    this.wind = Math.floor(Math.random() * 15) + " mph";
    this.temperature = Math.floor(Math.random() * (85 - 60)) + 60 + " F";
    this.humidity = Math.floor(Math.random() * (85 - 50)) + 50 + " RH"
    this.heat = Math.floor(Math.random() * (25 - 10)) + 10 + " C";
    this.s1 = this.season[Math.floor(Math.random() * this.season.length)];
    this.h1 = this.sun[Math.floor(Math.random() * this.sun.length)];
  }
}
