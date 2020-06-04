import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ErrorMessageComponent],
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  exports: [
    ErrorMessageComponent,
    FontAwesomeModule
  ]
})
export class SharedModule { }
