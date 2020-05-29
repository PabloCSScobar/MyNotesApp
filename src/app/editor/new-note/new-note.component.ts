import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotesService } from '../notes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
  newNoteForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required)
  });
  constructor(private notesService: NotesService, private router: Router) { }

  addNote() {
    this.notesService.addNote(this.newNoteForm.value).subscribe( note =>
      this.router.navigate([`notes/edit/${note.id}`])
    )
  }
  ngOnInit(): void {
  }

}
