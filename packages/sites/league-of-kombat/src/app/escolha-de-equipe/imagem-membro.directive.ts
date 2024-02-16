import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[imagemMembro]',
})
export class ImagemMembroDirective {
  constructor(private el: ElementRef) {}

  @Input()
  set imagemMembro(value: string) {
    this.el.nativeElement.style.backgroundImage = `url(assets/${value})`;
  }

  @Input()
  set membroIndex(value: number) {}
}
