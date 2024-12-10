import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Makes the service available throughout the app
})
export class AuthService {
  private baseUrl = 'http://localhost:3001/api/auth'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  /**
   * Login user with email and password
   * @param email User's email
   * @param password User's password
   * @returns Observable with server response
   */
  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { email, password };

    return this.http.post(`${this.baseUrl}/login`, body, { headers });
  }

  /**
   * Logout the user
   * @returns Observable with server response
   */
  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, {});
  }

  /**
   * Check if user is authenticated
   * @returns boolean
   */
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token; // Returns true if token exists
  }
}
