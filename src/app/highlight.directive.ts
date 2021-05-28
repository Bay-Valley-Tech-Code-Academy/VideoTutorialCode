import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight')
  public highLightColor: string;

  constructor(private readonly el: ElementRef<HTMLDivElement>) { 
    
  }


    @HostListener('mouseenter')
      handleMouseEnter(): void{
        this.el.nativeElement.style.backgroundColor = this.highLightColor || '#365ce6';
      }

    @HostListener('mouseleave')
      handleMouseLeave(): void{
        this.el.nativeElement.style.backgroundColor = null;
      }
}

/**
 * Benefits of using Angular Directives
 * 
 * 1.Attach event listeners correctly for you
 * 2. Detach event listeners to prevent memory leaaks
 * 
 * 
 */