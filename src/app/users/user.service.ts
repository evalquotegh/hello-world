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
    const url = 'https://jsonplaceholder.typicode.com/users';
    const params = new HttpParams()
      .set('name_like', 'ne')
      .set('email_like', 'biz')
      
      return this.httpClient.get<User[]>(url, { params });
  }
}
