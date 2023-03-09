import { Injectable,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CropsService implements OnInit {

  crops_url = "http://localhost:1000/crops";

  constructor(private http:HttpClient) { }

  createCrops(data:any):Observable<any> {
    return this.http.post(`${this.crops_url}`, data);
  }

  ngOnInit(): void {
    
  }
}
