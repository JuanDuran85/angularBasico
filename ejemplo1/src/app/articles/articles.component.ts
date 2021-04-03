import { Component, OnInit } from '@angular/core';
import { showStaggered } from '../animations/staggerd.showUp.animation';
import { ArticlesService } from '../services/articules.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.sass'],
  animations: [showStaggered]
})
export class ArticlesComponent implements OnInit {

  public resultado: any;
  
  constructor(private articlesService : ArticlesService) { }

  ngOnInit() {
    this.articlesService.getAll().subscribe(result => this.resultado = result);
    this.articlesService.buildObservable().subscribe(valor => {
      console.log(valor)
    });
  }
}
