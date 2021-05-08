import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})

export class ErrorMsgDirective implements OnInit {

  @Input() color : string = "red";
  @Input() msg : string = "El campo es obligatorio";

  public htmlElemento : ElementRef<HTMLElement>

  constructor(private _el : ElementRef<HTMLElement>, private _render : Renderer2) { 
    
    this.htmlElemento = _el;
  }
  
  ngOnInit(): void {
    this.setColor();
    this.setMsg();
    this.setClass();
  }

  setColor():void{
    this.htmlElemento.nativeElement.style.color = this.color;
  }

  setMsg():void{
    this.htmlElemento.nativeElement.innerHTML = this.msg;
  }

  setClass():void{
    this._render.addClass(this.htmlElemento.nativeElement, 'form-text');
  }

}
