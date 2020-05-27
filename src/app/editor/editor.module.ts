import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NoteComponent } from './note/note.component';
import { EditorRoutingModule } from './editor-routing.module';
import { NewNoteComponent } from './new-note/new-note.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainComponent, NavComponent, SidebarComponent, NoteComponent, NewNoteComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    EditorRoutingModule
  ]
})
export class EditorModule { }
