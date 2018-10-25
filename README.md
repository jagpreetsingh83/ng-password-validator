# NgPasswordValidator

## Details

This component allows the user to input password and confirm password in an interactive manner.

![Password Validator Screen](screen1.png 'Password Input')

![Password Validator Screen](screen2.png 'Confirm Password Validator')

![Password Validator Screen](screen3.png 'Both Valid')

```html
<pre>
{{response | async | json}}
</pre>
<app-password-validator #pwd [cpwd]="cpwd" (password)="data($event)"></app-password-validator>
<app-password-validator #cpwd [pwd]="pwd" (password)="data($event)" [response]="response"></app-password-validator>
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
