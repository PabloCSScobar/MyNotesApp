import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {
  note = null;
  editNoteForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required)
  });
  constructor(private route: ActivatedRoute, private router: Router, private notesService: NotesService) {
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.getNote(params.get("id"));
      if(this.note) {
        this.editNoteForm = this.fillForm();
      }
    })
  }
  editNote() {
    this.notesService.updateNote(this.note.id, this.editNoteForm.value);
  }
  getNote(id) {
    this.note = this.notesService.notesSubject.getValue().filter( x => x.id == id)[0];
    if(!this.note) {
      this.router.navigate(['notes']);
    }
  }
  deleteNote() {
    this.notesService.deleteNote(this.note.id).subscribe( () =>
      this.router.navigate(['notes'])
    )
  }
  fillForm() {
    return new FormGroup({
      title: new FormControl(this.note.title, Validators.required),
      body: new FormControl(this.note.body, Validators.required)
    });
  }
}
