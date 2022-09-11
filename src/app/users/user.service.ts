import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    const url = 'http://localhost:3000/users';
    const params = new HttpParams()
      .set('name_like', 'foo')
      .set('email_like', 'baz')
      
      return this.httpClient.get<User[]>(url, { params });
  }
}
