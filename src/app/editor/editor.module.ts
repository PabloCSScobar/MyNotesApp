import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NoteComponent } from './note/note.component';
import { EditorRoutingModule } from './editor-routing.module';



@NgModule({
  declarations: [MainComponent, NavComponent, SidebarComponent, NoteComponent],
  imports: [
    CommonModule,
    EditorRoutingModule
  ]
})
export class EditorModule { }
