import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchemesService implements OnInit {
  schemes_url = "http://localhost:1000/schemes";

  constructor(private http: HttpClient) { }

  getSchemesData(): Observable<any> {
    return this.http.get(`${this.schemes_url}`);
  }

  createSchemesUser(data: any): Observable<any> {
    return this.http.post(`${this.schemes_url}`, data);
  }

  ngOnInit(): void {
    
  }
}
