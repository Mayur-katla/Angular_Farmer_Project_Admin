import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  // connectivity angular and nodejs url 

  product_url = "http://localhost:1000/product";
  product_seeds_url = "http://localhost:1000/product_seeds";
  product_foods_url = "http://localhost:1000/product_foods";
  product_grains_url = "http://localhost:1000/product_grains";
  product_machinery_url = "http://localhost:1000/product_machinery";
  product_pesticides_url = "http://localhost:1000/product_pesticides";
  product_single_details = "http://localhost:1000/product_details";

  // all details from product table

  getProductDetails(): Observable<any> {
    return this.http.get(`${this.product_url}`);
  }

  // insert operation in product table 

  createProduct(data: any): Observable<any> {
    return this.http.post(`${this.product_url}`, data);
  }

  // select operation from type in product table

  getProductDetailsSeeds(): Observable<any> {
    return this.http.get(`${this.product_seeds_url}`);
  }

  
  getProductDetailsFoods(): Observable<any> {
    return this.http.get(`${this.product_foods_url}`);
  }
  
  getProductDetailsGrains(): Observable<any> {
    return this.http.get(`${this.product_grains_url}`);
  }
  
  getProductDetailsMachinery(): Observable<any> {
    return this.http.get(`${this.product_machinery_url}`);
  }
  
  getProductDetailsPesticides(): Observable<any> {
    return this.http.get(`${this.product_pesticides_url}`);
  }

  //delete operation 
  getSingleProductDetails(data:any):Observable<any> {
    // let single1 = single_product
    return this.http.delete(`${this.product_single_details}/${data}`)
  }
}
