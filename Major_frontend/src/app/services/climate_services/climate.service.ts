import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { weather } from '../../models/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClimateService implements OnInit {

  constructor(private http:HttpClient) { }

  // getWeatherData(cityName:string):Observable<any> {
  //   return this.http.get(environment.weatherApiBaseUrl+'/city/'+cityName, {
  //     headers: new HttpHeaders().set(environment.XRapidAPIHostName, environment.XRapidAPIHostValue).set(environment.XRapidAPIKeyName, environment.XRapidAPIKeyValue)
  //   });
  // }

  ngOnInit(): void {
    
  }
}
