import { Component, OnInit, HostListener, Input } from '@angular/core';

interface Error {
  num: boolean;
  letter: boolean;
  caps: boolean;
  special: boolean;
  min: boolean;
  match: boolean;
}

@Component({
  selector: 'app-password-validator',
  templateUrl: './password-validator.component.html',
  styleUrls: ['./password-validator.component.scss']
})
export class PasswordValidatorComponent implements OnInit {
  // Hide and Show of the Error Messages
  show = false;

  // Flag for confirm password field
  @Input()
  confirm = false;

  // Password string
  value: string;

  // Password string to match with
  @Input()
  matchWith: string;

  error: Error = {
    num: true,
    letter: true,
    caps: false,
    special: false,
    min: true,
    match: false
  };

  private hasError() {
    let hasError =
      this.error.letter ||
      this.error.min ||
      this.error.num ||
      this.error.special;

    if (this.confirm) {
      hasError = hasError || this.error.match;
    }

    return hasError;
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
    this.value = e.target.value;

    const numRegex = /\d/;
    const letterRegex = /[A-Za-z]/;
    const specialRegex = /^[ A-Za-z0-9@!#$]*$/;

    this.error.num = !numRegex.test(this.value);
    this.error.letter = !letterRegex.test(this.value);
    this.error.special = !specialRegex.test(this.value);
    this.error.min = this.value.length < 8;

    if (this.confirm) {
      this.error.match = this.value !== this.matchWith;
    }
  }
}
