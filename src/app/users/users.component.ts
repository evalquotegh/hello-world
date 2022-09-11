import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]> = of([]);

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }

  updateUser(id: number, name: string, email: string): void {
    const user = { id, name, email };
    this.userService.updateUser(user).subscribe();
  }
}
