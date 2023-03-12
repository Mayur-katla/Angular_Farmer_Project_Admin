import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit{

  constructor(private http:HttpClient) { }

  seeds_url = "http://localhost:1000/product_seeds_count";
  foods_url = "http://localhost:1000/product_foods_count";
  machinery_url = "http://localhost:1000/product_machinery_count";
  grains_url = "http://localhost:1000/product_grains_count";
  pesticides_url = "http://localhost:1000/product_pesticides_count";
  //product types 

  getProductSeeds():Observable<any> {
    return this.http.get(`${this.seeds_url}`);
  }

  getProductFoods():Observable<any> {
    return this.http.get(`${this.foods_url}`);
  }

  getProductMachinery():Observable<any> {
    return this.http.get(`${this.machinery_url}`);
  }
  
  getProductGrains():Observable<any> {
    return this.http.get(`${this.grains_url}`);
  }
  
  getProductPesticides():Observable<any> {
    return this.http.get(`${this.pesticides_url}`);
  }

  ngOnInit(): void {
    
  }
}
