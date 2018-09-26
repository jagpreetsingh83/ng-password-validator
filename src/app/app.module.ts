import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PasswordValidatorDirective } from './password-validator.directive';
import { PasswordValidatorComponent } from './password-validator/password-validator.component';


@NgModule({
  declarations: [
    AppComponent,
    PasswordValidatorDirective,
    PasswordValidatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
