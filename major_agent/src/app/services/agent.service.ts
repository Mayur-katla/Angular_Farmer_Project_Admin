import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AgentService implements OnInit {

  agent_url = "http://localhost:1000/agent_form";

  getAgentData():Observable<any> {
    return this.http.get(`${this.agent_url}`);
  }

  createAgentData(data:any):Observable<any> {
    return this.http.post(`${this.agent_url}`, data);
  }

  constructor(private http: HttpClient, private router: Router) { }

  login(email: any, password: any) {
    this.http.post<{ token: string }>(`${this.agent_url}`, { email, password })
      .subscribe(response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/Home']);
      });
  }

  signup(email: any, password: any) {
    this.http.post<{ token: string }>(`${this.agent_url}`, { email, password })
      .subscribe(response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/Login']);
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated() {
    const token = this.getToken();
    if (token) {
      // verify the token on the server
      return true;
    }
    return false;
  }
  
  ngOnInit(): void {
    
  }
}
