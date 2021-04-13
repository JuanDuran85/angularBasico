import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})

export class AgregarComponent implements OnInit {
  
  public creators : any[] = [
    {
      id: "DC Comics",
      desc: "DC Comics"
    },
    {
      id: "Marvel Comics",
      desc: "Marvel - Comics"
    }
  ];

  public heroe : Heroe = {
    superhero: '',
    alter_ego: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
    characters: ''
  }

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => console.log(id));
  }
}
