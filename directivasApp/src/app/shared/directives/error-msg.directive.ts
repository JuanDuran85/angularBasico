import { Directive, ElementRef, Input, OnInit, Renderer2, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})

export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color : string = 'red';
  private _msg : string = "Este campo es requerido";

  @Input() set color(value : string) {
    this.htmlElemento.nativeElement.style.color = value;
    this._color = value;
  }

  @Input() set msg(value : string) {
    this.htmlElemento.nativeElement.innerHTML = value;
    this._msg = value;
  };

  public htmlElemento : ElementRef<HTMLElement>

  constructor(private _el : ElementRef<HTMLElement>, private _render : Renderer2) {
    this.htmlElemento = this._el;
  }
 
  ngOnInit(): void {
    this.setColor();
    this.setMsg();
    this.setClass();
  }

  ngOnChanges(): void {
    console.log(this._color);
    console.log(this._msg);
  }

  setColor():void{
    this.htmlElemento.nativeElement.style.color = this._color;
  }

  setMsg():void{
    this.htmlElemento.nativeElement.innerHTML = this._msg;
  }

  setClass():void{
    this._render.addClass(this.htmlElemento.nativeElement, 'form-text');
  }
}
