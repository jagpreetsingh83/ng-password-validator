import {
  Component,
  HostListener,
  Input,
  EventEmitter,
  Output,
  OnInit
} from '@angular/core';
import { Error, Response } from '../../models/models';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-password-validator',
  templateUrl: './password-validator.component.html',
  styleUrls: ['./password-validator.component.scss']
})
export class PasswordValidatorComponent implements OnInit {
  // Hide and Show of the Error Messages
  show = false;

  @Input()
  pwd: PasswordValidatorComponent;

  @Input()
  cpwd: PasswordValidatorComponent;

  // Output Event
  @Output()
  password = new EventEmitter<Response>();

  // Password
  text: string;

  @Input()
  response: Subject<Response>;

  // Error Object
  error: Error = {
    num: true,
    letter: true,
    caps: false,
    special: false,
    min: true,
    match: false
  };

  ngOnInit() {
    // This is to handle the message box if validations are updated from the other input field
    if (this.response) {
      this.response.subscribe(data => {
        if (this.text) {
          this.show = !data.valid;
        }
      });
    }
  }

  private hasError() {
    return (
      this.error.letter ||
      this.error.min ||
      this.error.num ||
      this.error.special ||
      this.error.match
    );
  }

  private passwordMatch() {
    let textToMatch = this.text;
    if (this.pwd) {
      textToMatch = this.pwd.text;
    } else if (this.cpwd) {
      textToMatch = this.cpwd.text;
    }
    return this.text === textToMatch;
  }

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
    this.text = e.target.value;
    const numRegex = /\d/;
    const letterRegex = /[A-Za-z]/;
    const specialRegex = /^[ A-Za-z0-9@!#$]*$/;
    this.error.num = !numRegex.test(this.text);
    this.error.letter = !letterRegex.test(this.text);
    this.error.special = !specialRegex.test(this.text);
    this.error.min = this.text.length < 8;
    this.error.match = !this.passwordMatch();

    this.password.emit({
      password: this.text,
      valid: !this.hasError()
    });
  }
}
