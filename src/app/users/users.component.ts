import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(users => (this.users = users));
  }

}
