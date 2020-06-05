import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: HttpErrorResponse = null;
  loginForm = new FormGroup({
    username: new FormControl('pawel', Validators.required),
    password: new FormControl('pawel', Validators.required)
  });
  constructor(private authService: AuthService) { }

  login() {
    if (this.loginForm.status === 'VALID') {
      this.authService.login(this.loginForm.value).subscribe(user => console.log(user), err => {
        if ( err instanceof HttpErrorResponse)
          this.errorMessage = err;
          console.log(err);
      });
    }
  }

  ngOnInit(): void {
  }

}
