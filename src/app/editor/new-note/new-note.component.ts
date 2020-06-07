import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotesService } from '../notes.service';
import { Router } from '@angular/router';
import { faSave } from '@fortawesome/free-solid-svg-icons';
declare var $: any;

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
  saveIcon = faSave;
  newNoteForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('')
  });
  constructor(private notesService: NotesService, private router: Router) { }



  addNote() {
    if ( this.newNoteForm.status === 'VALID') {
      this.notesService.addNote(this.newNoteForm.value).subscribe( note =>
        this.router.navigate([`notes/edit/${note.id}`])
      );
    }
  }
  ngOnInit(): void {
    this.resizeTextarea();
  }
  resizeTextarea() {
    $('textarea').on({input() {
      const totalHeight = $(this).prop('scrollHeight') - parseInt($(this).css('padding-top'), 10) - parseInt($(this).css('padding-bottom'), 10) ;
      $(this).css({height: totalHeight});
  }
  });
  }
}

