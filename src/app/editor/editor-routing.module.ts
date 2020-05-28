import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewNoteComponent } from './new-note/new-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';

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
    path: 'edit/:id',
    component: EditNoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }