import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EditorRoutingModule } from './editor-routing.module';
import { NewNoteComponent } from './new-note/new-note.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoteListComponent } from './note-list/note-list.component';
import { EditNoteComponent } from './edit-note/edit-note.component';



@NgModule({
  declarations: [MainComponent, NavComponent, SidebarComponent, NewNoteComponent, NoteListComponent, EditNoteComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    EditorRoutingModule
  ]
})
export class EditorModule { }
