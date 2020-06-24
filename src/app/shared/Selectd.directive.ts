import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector:'[appSelected]'
})

export class Selected{
    constructor( elref:ElementRef){}
    
    @HostBinding('style.color') color:string = 'elref.style.color';

    @HostListener('mouseover') mouseover(){
        this.color= 'black';
    }
    @HostListener('mouseleave') mouseleave(){
        this.color= 'deepskyblue';
    }

}