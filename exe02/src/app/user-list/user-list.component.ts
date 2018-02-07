import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  names: string[];
  constructor() {
    this.names = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6'];
   }

  ngOnInit() {
  }

}
