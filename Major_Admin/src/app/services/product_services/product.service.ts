import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {

  constructor(private http: HttpClient) { }

  seeds = "http://localhost:1000/product_seeds";
  foods = "http://localhost:1000/product_foods";
  grains = "http://localhost:1000/product_grains";
  machinery = "http://localhost:1000/product_machinery";
  pesticides = "http://localhost:1000/product_pesticides";

  // product type Count

  seeds_url = "http://localhost:1000/product_seeds_count";
  foods_url = "http://localhost:1000/product_foods_count";
  machinery_url = "http://localhost:1000/product_machinery_count";
  grains_url = "http://localhost:1000/product_grains_count";
  pesticides_url = "http://localhost:1000/product_pesticides_count";

  //delete product

  delete_product = "http://localhost:1000/product_details";

  //product types 

  getProductSeeds(): Observable<any> {
    return this.http.get(`${this.seeds_url}`);
  }

  getProductFoods(): Observable<any> {
    return this.http.get(`${this.foods_url}`);
  }

  getProductMachinery(): Observable<any> {
    return this.http.get(`${this.machinery_url}`);
  }

  getProductGrains(): Observable<any> {
    return this.http.get(`${this.grains_url}`);
  }

  getProductPesticides(): Observable<any> {
    return this.http.get(`${this.pesticides_url}`);
  }

  getProductSeedsDetails(): Observable<any> {
    return this.http.get(`${this.seeds}`);
  }

  getProductFoodsDetails(): Observable<any> {
    return this.http.get(`${this.foods}`);
  }

  getProductMachineryDetails(): Observable<any> {
    return this.http.get(`${this.machinery}`);
  }

  getProductGrainsDetails(): Observable<any> {
    return this.http.get(`${this.grains}`);
  }

  getProductPesticidesDetails(): Observable<any> {
    return this.http.get(`${this.pesticides}`);
  }

  
  deleteProductDetails(single_product:any):Observable<any> {
    return this.http.delete(`${this.delete_product}/${single_product}`);
  }

  ngOnInit(): void {

  }
}
