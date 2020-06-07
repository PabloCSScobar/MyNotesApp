import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerMessage = false;
  errorMessage: HttpErrorResponse = null;
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  login() {
    if (this.loginForm.status === 'VALID') {
      this.authService.login(this.loginForm.value).subscribe(() => {}, err => {
        if ( err instanceof HttpErrorResponse) {
          this.errorMessage = err;
        }
      });
    }
  }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      if (params.registered !== undefined && params.registered === 'true') {
          this.registerMessage = true;
      } else {
        this.registerMessage = false;
      }
    });
  }

}
