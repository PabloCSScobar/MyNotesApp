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
  NoteId;
  note = null;
  editNoteForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required)
  });
  constructor(private route: ActivatedRoute, private notesService: NotesService) {
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.NoteId = params.get("id");
      this.notesService.notesSubject.subscribe( notes => {
        this.note = notes.filter( x => x.id == this.NoteId);
      });
    })
    
  }
  editNote() {
    console.log(this.editNoteForm.value);
  }
  getNote(id) {
    
  }
}
