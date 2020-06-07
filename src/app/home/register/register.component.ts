import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { CustomValidators } from 'src/app/shared/custom-validators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorMessage = null;
  registerForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      CustomValidators.email
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    password: new FormControl('', [
      Validators.required,
      CustomValidators.passwordStrength
    ]),
    confirm_password: new FormControl('', Validators.required)
  }, {
    validators: [CustomValidators.passwordMatch]
  } );
  constructor(private authService: AuthService) { }


  register() {
    if (this.registerForm.status === 'VALID') {
      this.authService.register(this.registerForm.value).subscribe(() => {}, err => {
        if ( err instanceof HttpErrorResponse) {
          this.errorMessage = err;
        }
      });
    }
  }
  ngOnInit(): void {
  }

}
