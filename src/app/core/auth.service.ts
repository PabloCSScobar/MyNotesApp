import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
    ) { }
  setToken(token) {
    this.cookieService.set('Token', token);
  }
  getToken(token) {
    this.cookieService.get('Token');
  }
  login(loginData) {
    return this.http.post<any>(`${environment.apiUrl}/auth/`, loginData).pipe(
      tap( data => this.setToken(data.token)),
      tap( data => this.router.navigate(['notes'])),
    )
  }
  register(registerData) {
    this.http.post(`${environment.apiUrl}/api/users/`, registerData);
  }
}
