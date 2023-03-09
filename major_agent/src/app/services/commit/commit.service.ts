import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CommitService implements OnInit{

  commit_url = "http://localhost:1000/agent_commit";

  constructor(private http:HttpClient) { }

  getCommitData():Observable<any> {
    return this.http.get(`${this.commit_url}`);
  }

  createCommitData(data:any):Observable<any> {
    return this.http.post(`${this.commit_url}`, data);
  }

  ngOnInit(): void {
    
  }
}
