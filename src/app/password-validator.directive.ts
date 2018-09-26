import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPwd]'
})
export class PasswordValidatorDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const messageDiv = this.renderer.createElement('div');
    this.renderer.addClass(messageDiv, 'pwd-box');
    this.renderer.appendChild(messageDiv, this.renderer.createText('WTF'));
    this.renderer.appendChild(this.elRef.nativeElement.parentNode, messageDiv);
  }
}
