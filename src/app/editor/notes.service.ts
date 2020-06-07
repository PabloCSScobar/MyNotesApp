import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { AuthService } from '../core/auth.service';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notesSubject = new BehaviorSubject<any>(null);

  constructor(
    private http: HttpClient,
    private auth: AuthService
    ) { }
  
  getNotes() {
    return this.http.get(`${environment.apiUrl}/api/notes/`).pipe(
      tap( notes => this.notesSubject.next(notes))
    );
  }

  addNote(note) {
    return this.http.post<any>(`${environment.apiUrl}/api/notes/`, note).pipe(
      map(res => res.result),
      tap( res => this.notesSubject.next([...this.notesSubject.getValue(), res]))
    );
  }
  deleteNote(id) {
    return this.http.delete(`${environment.apiUrl}/api/notes/${id}/`).pipe(
      tap(
        () => this.notesSubject.next(this.notesSubject.getValue().filter( x => x.id !== id))
    )
    );
  }

  updateNote(id, note) {
    this.http.put(`${environment.apiUrl}/api/notes/${id}/`, note).subscribe( response => {
      console.log(response);
      this.notesSubject.next( this.notesSubject.getValue().map(
        x => {
          if ( x.id === id) {
            return response;
          } else {
            return x;
          }
        }
      ));
    });
  }
}
