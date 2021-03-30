import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})

export class HeroeComponent implements OnInit {
  
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute);
  }
  
}
