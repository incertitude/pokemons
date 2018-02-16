import { Directive, ElementRef, Input, HostListener, Renderer2 } from '@angular/core';

@Directive({
     selector: '[appPkmShadow]'
    })

export class ShadowCardDirective {
    @Input() bordercolor: string = 'solid 4px' + 'red';

    constructor(private _el: ElementRef, private _renderer: Renderer2) {
        this.setHeigth('200px');
    }
    @HostListener('mouseenter') onMouseEnter() {
        this.setBorder('#009688');
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.setBorder('#f5f5f5');
      }
    private setBorder(color: string) {
        this._el.nativeElement.style.border = '2px solid ' + color;
      }
      private setHeigth(height: string) {
        this._el.nativeElement.style.height = height;
      }
}
