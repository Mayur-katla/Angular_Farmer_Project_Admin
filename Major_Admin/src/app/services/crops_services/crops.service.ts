import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CropsService implements OnInit {
  constructor(private http:HttpClient) { }

  crops_count = "http://localhost:1000/crops_count";
  crops_count_rabi = "http://localhost:1000/crops_count_rabi";
  crops_count_kharif = "http://localhost:1000/crops_count_kharif";
  crops_count_zaid = "http://localhost:1000/crops_count_zaid";
  product_count = "http://localhost:1000/product_count";

  schemes_count = "http://localhost:1000/schemes_count";

  //crops Counts 

  getCropsCount():Observable<any> {
    return this.http.get(`${this.crops_count}`);
  }

  getCropsCountRabi():Observable<any> {
    return this.http.get(`${this.crops_count_rabi}`);
  }
  getCropsCountKharif():Observable<any> {
    return this.http.get(`${this.crops_count_kharif}`);
  }
  getCropsCountZaid():Observable<any> {
    return this.http.get(`${this.crops_count_zaid}`);
  }

  //product Count 

  getProductCount():Observable<any> {
    return this.http.get(`${this.product_count}`);
  }

  // Schemes count

  getSchemesCount():Observable<any> {
    return this.http.get(`${this.schemes_count}`);
  }

  ngOnInit(): void {

  }
}
