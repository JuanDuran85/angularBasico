import { Component, OnInit } from '@angular/core';

import { delay } from 'rxjs/operators';
import { SpotifyService } from './../../services/spotify.service';
import { SpotyApp } from './../../interfaces/new_release.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public data : SpotyApp[] = [];
  public loading : boolean = false;

  constructor(private _spotifyServices : SpotifyService) { 
    this.loading = true;
  }

  ngOnInit(): void {
    this._spotifyServices.getNewReleases().pipe(
      delay(1500)
    ).subscribe((datos: any) =>{
      this.data = datos;
      this.loading = false;
    });
  }
}