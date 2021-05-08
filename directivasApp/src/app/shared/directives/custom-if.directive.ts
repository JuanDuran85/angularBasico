import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  @Input() set customIf(value : boolean) {
    if (value) {
      this._vcr.createEmbeddedView(this._templeRef);
    } else {
      this._vcr.clear();
    }
  }

  constructor(private _templeRef : TemplateRef<HTMLElement>, private _vcr : ViewContainerRef ) {}

}
