import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  product_url = "http://localhost:1000/product";

  // insert operation in product table 

  createProduct(data: any): Observable<any> {
    return this.http.post(`${this.product_url}`, data);
  }

  constructor(private http:HttpClient) { }
}
