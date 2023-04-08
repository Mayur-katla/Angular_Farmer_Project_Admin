import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentService implements OnInit{

  constructor(private http:HttpClient) { }

  agent_url = "http://localhost:1000/agent_form";
  commit_url = "http://localhost:1000/agent_commit";
  delete_url = "http://localhost:1000/commit_delete";

  getAgentData():Observable<any> {
    return this.http.get(`${this.agent_url}`);
  }

  getCommitData():Observable<any> {
    return this.http.get(`${this.commit_url}`);
  }

  deleteCommitDetails(commit:any):Observable<any> {
    return this.http.delete(`${this.delete_url}/${commit}`);
  }

  // Commit details



  ngOnInit(): void {
    
  }
}
