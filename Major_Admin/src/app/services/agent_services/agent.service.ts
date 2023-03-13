import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentService implements OnInit{

  constructor(private http:HttpClient) { }

  agent_url = "http://localhost:1000/agent_form";

  getAgentData():Observable<any> {
    return this.http.get(`${this.agent_url}`);
  }

  ngOnInit(): void {
    
  }
}
