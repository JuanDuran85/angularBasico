import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[borderDirect]'
})

export class BorderDirect {

    @Input() borderDirect : string | undefined;
    @Input() backGroundDirect : string | undefined;

    constructor(private el : ElementRef){}

    ngOnInit() {
        console.log("Usando la directiva borderDirect");
        this.el.nativeElement.classList.add(this.backGroundDirect);
    }
    
    @HostListener('mouseover') applyBorder(){
        this.el.nativeElement.style.border = `2px solid ${this.borderDirect}`;
    }

    @HostListener('mouseout') removeBorder(){
        this.el.nativeElement.style.border = "none";
    }
}