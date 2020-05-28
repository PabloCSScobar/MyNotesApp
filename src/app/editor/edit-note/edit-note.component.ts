import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {
  note = null;
  editNoteForm;
  constructor(private route: ActivatedRoute, private notesService: NotesService) {
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.getNote(params.get("id"));
      this.editNoteForm = this.fillForm();
    })
  }
  editNote() {
    this.notesService.updateNote(this.note.id, this.editNoteForm.value);
  }
  getNote(id) {
    this.note = this.notesService.notesSubject.getValue().filter( x => x.id == id)[0];
  }
  fillForm() {
    return new FormGroup({
      title: new FormControl(this.note.title, Validators.required),
      body: new FormControl(this.note.body, Validators.required)
    });
  }
}
