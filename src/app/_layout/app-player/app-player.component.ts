import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-player',
  templateUrl: './app-player.component.html',
  styleUrls: ['./app-player.component.css']
})
export class AppPlayerComponent implements OnInit {
  // used for show player
  showPlayer = true;

  // stop or play music
  musicStarted = false;

  // current track
  currentTrack = new Audio('/assets/track/thunderstruck.mp3');
  currentTimeTrack = '00:00';
  durationTimeTrack: any

  constructor() {}

  ngOnInit() {
    $(this.currentTrack).on('loadedmetadata', () => { this.durationTimeTrack = this.makeVisualizationPretty(this.currentTrack.duration); })

    this.seekTimePlayer();

    $('[data-toggle="tooltip"]').tooltip()
  }

  togglePlayer() {
    this.showPlayer ? this.showPlayer = false : this.showPlayer = true;

    $('.player-footer').toggleClass('closed');
  }

  playMusic() {
    this.musicStarted ? this.musicStarted = false : this.musicStarted = true;

    if ( this.musicStarted ) {
      this.currentTrack.play()
      this.progressBar();
    } else {
      this.currentTrack.pause()
    }
  }

  progressBar() {
    this.currentTrack.addEventListener('timeupdate', () => {
      const currentTime = this.currentTrack.currentTime;
      const duration = this.currentTrack.duration;

      this.currentTimeTrack = this.makeVisualizationPretty(currentTime);

      $('.progress').width(((currentTime + .25) / duration * 100) + '%');
    });
  }

  makeVisualizationPretty(time) {
    const minutes: any = '0' + Math.floor(time / 60);
    const seconds = '0' + Math.floor(time % 60);

    return minutes.substr(-2) + ':' + seconds.substr(-2);
  }

  seekTimePlayer() {
    $('[data-player]').click( e  => {
      const posLeftElement = $('[data-player]').offset().left;
      const widthPlayer = $('[data-player]').width();
      const currentClick = e.pageX - posLeftElement;

      this.currentTrack.currentTime = ((currentClick * this.currentTrack.duration)) / widthPlayer;

      this.playMusic();

      this.musicStarted = true;
      this.currentTrack.play()
      this.progressBar();
    });
  }
}
