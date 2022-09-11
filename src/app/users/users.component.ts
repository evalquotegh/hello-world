import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]> = of([]);

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const params = new HttpParams()
      .set('name_like', 'ne')
      .set('email_like', 'biz')

    this.users$ = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users', { params });
  }

}
