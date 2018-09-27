import { Component } from '@angular/core';
import { Response } from './password-validator/password-validator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  response: Response;

  data(value: Response) {
    this.response = value;
  }
}
