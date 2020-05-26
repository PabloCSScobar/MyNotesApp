import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule } from '@angular/forms'
import { AuthComponent } from './auth/auth.component';
@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent, AuthComponent],
  imports: [
    ReactiveFormsModule,
    HomeRoutingModule,
    CommonModule
  ]
})
export class HomeModule { }
