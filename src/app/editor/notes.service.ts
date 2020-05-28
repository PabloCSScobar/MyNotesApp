import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notesSubject = new BehaviorSubject<any>(null);

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    ) { }
  
  getNotes() {
    return this.http.get(`${environment.apiUrl}/api/notes/`, {headers: this.getHeaders()}).pipe(
      tap( notes => this.notesSubject.next(notes))
    );
  }

  addNote(note) {
    this.http.post(`${environment.apiUrl}/api/notes/`, note, {headers: this.getHeaders()}).subscribe( data => console.log(data));
  }

  updateNote(id, note) {
    this.http.put(`${environment.apiUrl}/api/notes/${id}/`, note, {headers: this.getHeaders()}).subscribe( response => {
      console.log(response);
      this.notesSubject.next( this.notesSubject.getValue().map(
        x=> {
          if ( x.id == id) {
            return response;
          }
          else return x;
        }
      ));
    });
  }
  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Token fd8a99605d9fe581e9a6a65f0b9221aaffeebb86`
    })
  }
}
