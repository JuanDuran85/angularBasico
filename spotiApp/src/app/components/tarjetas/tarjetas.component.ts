import { Router } from '@angular/router';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SpotyAppArtist } from './../../interfaces/search_artist.interface';
import { SpotyApp } from './../../interfaces/new_release.interface';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit {

  @Input() dataIn : SpotyApp[] | SpotyAppArtist[] = [] 
  @Output() idArtist : EventEmitter<string> = new EventEmitter();

  constructor(private _router : Router) { }

  ngOnInit(): void {
  }

  artisteDetalle(item : any) {
    if (item.type === "artist" ) {
      this._router.navigate(['/artist', item.id]);
    } else {
      this._router.navigate(['/artist', item.artists[0].id]);
    }
  }
}