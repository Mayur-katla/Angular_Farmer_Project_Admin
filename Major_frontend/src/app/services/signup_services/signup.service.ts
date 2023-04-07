import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  signup_url = "http://localhost:1000/signup";
  // login_url = "http://localhost:1000/login";

  getSignup():Observable<any> {
    return this.http.get(`${this.signup_url}`);
  }

  createSignup(data:any): Observable<any> {
    return this.http.post(`${this.signup_url}`, data);
  }

  constructor(private http: HttpClient, private router: Router) { }

  login(email: any, password: any) {
    this.http.post<{ token: string }>(`${this.signup_url}`, { email, password })
      .subscribe(response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['']);
      });
  }

  signup(email: any, password: any) {
    this.http.post<{ token: string }>(`${this.signup_url}`, { email, password })
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
}
