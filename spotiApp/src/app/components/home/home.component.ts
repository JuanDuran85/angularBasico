import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

import { SpotyApp } from './../../interfaces/new_release.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public data : SpotyApp[] = [];

  constructor(private _spotifyServices : SpotifyService) { }

  ngOnInit(): void {
    this._spotifyServices.getNewReleases().subscribe((datos: any) =>this.data = datos);
  }
}
