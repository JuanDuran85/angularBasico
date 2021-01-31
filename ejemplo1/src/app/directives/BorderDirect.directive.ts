import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
    selector: '[borderDirect]'
})

export class BorderDirect {

    @Input() borderDirect : string;
    @Input() backGroundDirect : string;

    constructor(private el : ElementRef){
        this.borderDirect = "";
        this.backGroundDirect = "";
    }

    ngOnInit() {
        console.log("Usando la directiva borderDirect");
        this.el.nativeElement.style.border = `2px solid ${this.borderDirect}`;
        this.el.nativeElement.classList.add(this.backGroundDirect);
    }
}