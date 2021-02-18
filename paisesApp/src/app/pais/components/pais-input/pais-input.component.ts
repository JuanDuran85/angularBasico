import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.scss']
})
export class PaisInputComponent implements OnInit {
 
  //creamos el evento parar ser escuchado
  @Output() onEnter : EventEmitter<string> = new EventEmitter();
  //emitimos un string cuando la persona deja de escribir
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  //sin formulario reactivo se aplica esto
  //observable manual con Subject

  debouncer: Subject<string> = new Subject();
  termino: string = "";

  constructor() { }

  ngOnInit(): void {
    //suscribiendo 
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor => {
      console.log(valor);
    })
  }

  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){
    this.debouncer.next(this.termino);
  }

}
