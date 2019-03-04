import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {

    // My attempt \\

    // constructor(private elRef: ElementRef) { }

    // @HostListener('click') toggle() {
    //     if(this.elRef.nativeElement.classList.contains('open')) {
    //         this.elRef.nativeElement.classList.remove('open');
    //     } else {
    //         this.elRef.nativeElement.classList.add('open')
    //     }
    // }

    // Max's Code \\

    @HostBinding('class.open') isOpen = false;


    @HostListener('click') toggle() {
        this.isOpen = !this.isOpen;
    }
}