import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClimateData } from '../../models/models';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClimateService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }
}
