import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    const url = `${API}/users`;
    const params = new HttpParams()
      .set('email_like', 'bar')
      
      return this.httpClient.get<User[]>(url, { params });
  }

  updateUser(user: User): Observable<User> {
    const url = `${API}/users/${user.id}`;
    const headers = new HttpHeaders()
      .set('X-Auth', 'email');
    return this.httpClient.put<User>(url, user);
  }
}
