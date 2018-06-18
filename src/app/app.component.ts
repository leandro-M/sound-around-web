import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import * as $ from 'jquery';
import 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(public router: Router) {}
}
