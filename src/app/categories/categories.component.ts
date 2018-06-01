import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  test = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  constructor() { }

  ngOnInit() {
  }

}
