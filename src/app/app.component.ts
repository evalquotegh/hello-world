import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'hello-world';
  titles: string[] = [];

  updateProjectName(newTitle: string) {
    this.title = newTitle;
    this.titles.push(newTitle);
  }
}
