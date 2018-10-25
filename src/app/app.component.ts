import { Component } from '@angular/core';
import { Response } from '../models/models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  response = new Subject<Response>();

  data(value: Response) {
    this.response.next(value);
  }
}
