import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {
  constructor() {
    this.scrollMenu();
  }

  ngOnInit() {
  }

  scrollMenu() {
    $(window).scroll(function() {
      if( $(this).scrollTop() > 200 )  {
        $('.container-menu').addClass('-scrolled')
      } else {
        $('.container-menu').removeClass('-scrolled')
      }
    })
  }

}
