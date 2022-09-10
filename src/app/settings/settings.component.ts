import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  @Output() projectNameEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  updateProjectName(newProjectName: string) {
    this.projectNameEmitter.emit(newProjectName);
  }

}
