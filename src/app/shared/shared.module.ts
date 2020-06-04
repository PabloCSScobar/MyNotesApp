import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CutStringPipe } from './pipes/cut-string.pipe';

@NgModule({
  declarations: [ErrorMessageComponent, CutStringPipe],
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  exports: [
    CutStringPipe,
    ErrorMessageComponent,
    FontAwesomeModule
  ]
})
export class SharedModule { }
