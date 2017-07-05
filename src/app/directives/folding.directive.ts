import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({ selector: '[folding]' })
export class FoldingDirective {
    constructor(private el: ElementRef) {
        let hides = el.nativeElement.querySelectorAll("*:not(h1)");
        for (let hide of hides) hide.style.display = 'none';
    }
    @HostListener('click') onClick() {
        let hides = this.el.nativeElement.querySelectorAll("*:not(h1)");
        for (let hide of hides) hide.style.display = hide.style.display=='none'?'block':'none';
    }    
}