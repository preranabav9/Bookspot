import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenicate: boolean;
  constructor() { }

  ngOnInit(): void {
    this.isAuthenicate = false;
  }

}
