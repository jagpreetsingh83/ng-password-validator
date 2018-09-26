import { Component, OnInit, HostListener } from '@angular/core';

interface Error {
  num: boolean;
  letter: boolean;
  caps: boolean;
  special: boolean;
  min: boolean;
}

@Component({
  selector: 'app-password-validator',
  templateUrl: './password-validator.component.html',
  styleUrls: ['./password-validator.component.scss']
})
export class PasswordValidatorComponent implements OnInit {
  show = false;
  error: Error = {
    num: true,
    letter: true,
    caps: false,
    special: false,
    min: true
  };

  private hasError() {
    return (
      this.error.letter ||
      this.error.min ||
      this.error.num ||
      this.error.special
    );
  }

  constructor() {}

  ngOnInit() {}

  onFocus(e) {
    this.show = true;
  }

  onBlur(e) {
    if (!e.target.value || !this.hasError()) {
      this.show = false;
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    this.handleCaps(e);
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(e: KeyboardEvent) {
    this.handleCaps(e);
  }

  handleCaps(e) {
    this.error.caps = e.getModifierState('CapsLock');
  }

  onInput(e) {
    const numRegex = /\d/;
    const letterRegex = /[A-Za-z]/;
    const specialRegex = /^[ A-Za-z0-9@!#$]*$/;
    const text = e.target.value;

    this.error.num = !numRegex.test(text);
    this.error.letter = !letterRegex.test(text);
    this.error.special = !specialRegex.test(text);
    this.error.min = text.length < 8;
  }
}
