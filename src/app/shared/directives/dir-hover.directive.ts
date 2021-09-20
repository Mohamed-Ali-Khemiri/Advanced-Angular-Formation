import { Directive, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[appDirHover]'
})
export class DirHoverDirective{
  constructor(
    private elementRef:ElementRef,
    public renderer: Renderer2,
    private div: ElementRef
  ) {
    this.div = this.renderer.createElement('div');
    const text = this.renderer.createText('Testing');
    this.renderer.appendChild(this.div, text);
    this.renderer.setStyle(this.div, 'background-color', 'black');
    this.renderer.setStyle(this.div, 'border-radius', '4px');
    this.renderer.setStyle(this.div, 'color', 'white');
    this.renderer.setStyle(this.div, 'padding', '2px 4px');
    this.renderer.setStyle(this.div, 'position', 'absolute');
    this.renderer.setStyle(this.div, 'white-space', 'nowrap');
    this.renderer.setStyle(this.div, 'top', 'calc(100% + 4px)');
    this.renderer.setStyle(this.div, 'position', 'relative');
  }

  @ViewChild('tooltip', { static: false }) divHello!: ElementRef;


  @HostListener('mouseover') mouseover(){
    this.renderer.appendChild(this.elementRef.nativeElement, this.div);
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
}

  @HostListener('mouseleave') mouseleave(){
    this.renderer.removeChild(this.elementRef.nativeElement, this.div);
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');

  }
}
