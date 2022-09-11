import { Component, Input, OnInit } from '@angular/core';

type KLASS = {
  [key: string]: any
}

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  @Input() logs: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getClasses(log: string): KLASS {
    const klass: KLASS = {};

    switch (true) {
      case log && log.length <= 3:
        klass['is-short'] = true;
        break;
      case log.length > 5:
        klass['is-long'] = true;
        break;
      default:
        klass['is-empty'] = true;
        break;
    }

    return klass;
  
  }

  getStyles(url: string): KLASS {
    return {
      background: `url(${url}) no-repeat`,
      paddingLeft: 'calc(16px + 8px)'
    }
  }
}

