import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {
  numberIterateTest = [0, 1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit() {
  }

}
