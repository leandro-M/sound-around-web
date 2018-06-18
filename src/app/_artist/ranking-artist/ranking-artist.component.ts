import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking-artist',
  templateUrl: './ranking-artist.component.html',
  styleUrls: ['./ranking-artist.component.scss']
})
export class RankingArtistComponent implements OnInit {
  numberIterateTest = [0, 1, 2, 3, 4];
  rankingTest = [123, 122, 121, 120, 119]
  constructor() { }

  ngOnInit() {
  }

}
