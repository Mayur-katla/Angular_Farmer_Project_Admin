import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentService implements OnInit {

  agent_url = "http://localhost:1000/agent_form";

  constructor(private http:HttpClient) { }

  getAgentData():Observable<any> {
    return this.http.get(`${this.agent_url}`);
  }

  createAgentData(data:any):Observable<any> {
    return this.http.post(`${this.agent_url}`, data);
  }

  ngOnInit(): void {
    
  }
}
