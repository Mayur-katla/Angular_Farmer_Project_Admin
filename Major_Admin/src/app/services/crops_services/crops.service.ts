import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CropsService implements OnInit {
  constructor(private http: HttpClient) { }

  crops_count = "http://localhost:1000/crops_count";
  crops_count_rabi = "http://localhost:1000/crops_count_rabi";
  crops_count_kharif = "http://localhost:1000/crops_count_kharif";
  crops_count_zaid = "http://localhost:1000/crops_count_zaid";
  product_count = "http://localhost:1000/product_count";

  rabi_url = "http://localhost:1000/rabi_links";
  kharif_url = "http://localhost:1000/kharif_links";
  zaid_url = "http://localhost:1000/zaid_links";

  schemes_count = "http://localhost:1000/schemes_count";

  //crops Counts 

  getCropsCount(): Observable<any> {
    return this.http.get(`${this.crops_count}`);
  }

  getCropsCountRabi(): Observable<any> {
    return this.http.get(`${this.crops_count_rabi}`);
  }
  getCropsCountKharif(): Observable<any> {
    return this.http.get(`${this.crops_count_kharif}`);
  }
  getCropsCountZaid(): Observable<any> {
    return this.http.get(`${this.crops_count_zaid}`);
  }

  getCropsRabiDetails(): Observable<any> {
    return this.http.get(`${this.rabi_url}`);
  }

  getCropsKharifDetails(): Observable<any> {
    return this.http.get(`${this.kharif_url}`);
  }

  getCropsZaidDetails(): Observable<any> {
    return this.http.get(`${this.zaid_url}`);
  }
  //product Count 

  getProductCount(): Observable<any> {
    return this.http.get(`${this.product_count}`);
  }

  // Schemes count

  getSchemesCount(): Observable<any> {
    return this.http.get(`${this.schemes_count}`);
  }


  ngOnInit(): void {

  }
}
