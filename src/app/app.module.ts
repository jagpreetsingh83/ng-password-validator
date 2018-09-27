import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PasswordValidatorComponent } from './password-validator/password-validator.component';

@NgModule({
  declarations: [AppComponent, PasswordValidatorComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
