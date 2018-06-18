import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-artist',
  templateUrl: './feed-artist.component.html',
  styleUrls: ['./feed-artist.component.scss']
})
export class FeedArtistComponent implements OnInit {
  numberIterateTest = [0, 1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit() {
  }

}
