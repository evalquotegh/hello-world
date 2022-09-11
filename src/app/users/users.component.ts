import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  },
    phone: string;
    website: string;
    company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const params = new HttpParams()
      .set('name_like', 'ne')
      .set('email_like', 'biz')

    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users', { params })
      .subscribe(users => (this.users = users));
  }

}
