import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SchemesService implements OnInit {

  schemes_url = "http://localhost:1000/schemes";
  single_schemes = "http://localhost:1000/single_schemes_details";
  order_url = "http://localhost:1000/orderNow"

  constructor(private http: HttpClient) { }

  getSchemesData(): Observable<any> {
    return this.http.get(`${this.schemes_url}`);
  }

  createSchemesUser(data: any): Observable<any> {
    return this.http.post(`${this.schemes_url}`, data);
  }

  getSingleSchemesDetails(data:any):Observable<any> {
    return this.http.get(`${this.single_schemes}/${data}`);
  }

  //order now 

  getorderNow(): Observable<any> {
    return this.http.get(`${this.order_url}`);
  }

  createorderNow(data: any): Observable<any> {
    return this.http.post(`${this.order_url}`, data);
  }

  ngOnInit(): void {

  }
}
