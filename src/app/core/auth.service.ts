import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) { }
  login(loginData) {
    this.http.post(`${environment.apiUrl}/auth/`, loginData).subscribe( token => console.log(token));
  }
}
