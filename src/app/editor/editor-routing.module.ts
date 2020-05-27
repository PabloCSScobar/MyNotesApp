import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteComponent } from './note/note.component';
import { NewNoteComponent } from './new-note/new-note.component';

const routes: Routes = [
  {
    path: '',
    component: NewNoteComponent
  },
  {
    path: 'new',
    component: NewNoteComponent
  },
  {
    path: 'edit',
    component: NoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }