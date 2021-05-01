import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.scss']
})

export class Pagina1Component implements OnInit, OnChanges, OnDestroy, AfterContentChecked, AfterViewChecked, DoCheck, AfterViewInit, AfterContentInit   {

  public segundos : number = 0;
  public timer! : Subscription;

  constructor() { 
    console.log("construvtor");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("implementado el ciclo ngOnChanges");
  }
  ngOnDestroy(): void {
    console.log("implementado el ciclo ngOnDestroy");
    this.timer.unsubscribe();
  }
  ngAfterContentChecked(): void {
    console.log("implementado el ciclo ngAfterContentChecked");
  }
  ngAfterViewChecked(): void {
    console.log("implementado el ciclo ngAfterViewChecked");
  }
  ngDoCheck(): void {
    console.log("implementado el ciclo ngDoCheck");
  }
  ngAfterViewInit(): void {
    console.log("implementado el ciclo ngAfterViewInit");
  }
  ngAfterContentInit(): void {
    console.log("implementado el ciclo ngAfterContentInit");
  }
  ngOnInit(): void {
    console.log("implementado el ciclo ngOnInit");
    this.timer = interval(1000).subscribe(x => {
      console.log(x);
      this.segundos = x;
    })
  }
}
