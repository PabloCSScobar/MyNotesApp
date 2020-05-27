import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    ) { }



  addNote(note) {
    note.owner = 1;
    this.http.post(`${environment.apiUrl}/api/notes/`, note).subscribe( data => console.log(data));
  }
}
