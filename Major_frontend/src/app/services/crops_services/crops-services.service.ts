import { Injectable,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CropsServicesService implements OnInit {

  // crops url for nodejs and angular connectivity

  crops_url = "http://localhost:1000/crops";
  crops_rabi_url = "http://localhost:1000/crops_rabi";
  rabi_url = "http://localhost:1000/rabi_links";
  kharif_url = "http://localhost:1000/kharif_links";
  zaid_url = "http://localhost:1000/zaid_links";
  single_crop_details = "http://localhost:1000/Crops_details";
  single_crop = "http://localhost:1000/single_crops_details";
  delete_crop = "http://localhost:1000/delete_crops_details";

  constructor(private http: HttpClient) { }

  // crops details
  getCropsDetails() :Observable<any> {
    return this.http.get(`${this.crops_url}`);
  }

  createCrops(data:any):Observable<any> {
    return this.http.post(`${this.crops_url}`, data);
  }

  getRabiCropsDetails() :Observable<any> {
    return this.http.get(`${this.crops_rabi_url}`);
  }

  // rabi links 
  getRabiLinks() :Observable<any> {
    return this.http.get(`${this.rabi_url}`);
  }

  // kharif links 
  getKharifLinks() :Observable<any> {
    return this.http.get(`${this.kharif_url}`);
  }

  // zaid links
  getZaidLinks() :Observable<any> {
    return this.http.get(`${this.zaid_url}`);
  }

  getSingleCropsDetails(name:any):Observable<any> {
    let name1 = name;
    return this.http.get(`${this.single_crop_details}/${name1}`);
  }

  getSingleCrop(single:any):Observable<any> {
    // let single1 = single;
    return this.http.get(`${this.single_crop}/${single}`);
  }

  // delete crops details 
  deleteCropsDetails(single:any):Observable<any> {
    return this.http.delete(`${this.delete_crop}/${single}`)
  }

  ngOnInit(): void {
    
  }
}
