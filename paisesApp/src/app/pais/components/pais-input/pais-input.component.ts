import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.scss']
})

export class PaisInputComponent implements OnInit {
 
  @Input() placeholder: string = "Ingresa un valor";

  //creamos el evento parar ser escuchado
  @Output() onEnter : EventEmitter<string> = new EventEmitter();
  //emitimos un string cuando la persona deja de escribir
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  //sin formulario reactivo se aplica esto
  //observable manual con Subject con Subject de rxjs
  // la idea es que emita cuando se deje de escribir
  debouncer: Subject<string> = new Subject();
  termino: string = "";

  constructor() { }

  ngOnInit(): void {
    //suscribiendo 
    this.debouncer
    //metodo pipe, conexion que permite trasnformar la salida del subscribe
    .pipe(debounceTime(300)) // el operador debounceTime se usa para esperar el tiempo x hasta que el observable deje de emitir
    .subscribe(valor => {
      this.onDebounce.emit(valor);
    })
  }

  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){
    // el next es para enviar el siguiente valor.
    this.debouncer.next(this.termino);
  }

}
