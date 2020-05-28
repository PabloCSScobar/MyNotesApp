import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthComponent } from './home/auth/auth.component';
import { MainComponent } from './editor/main/main.component';
import { NotesResolver } from './editor/note-resolver.service';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () =>
          import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'notes',
    resolve: {
      notes: NotesResolver
    },
    component: MainComponent,
    loadChildren: () =>
          import('./editor/editor.module').then(m => m.EditorModule)
  },
  {
    path: '**',
    redirectTo: 'notes',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [NotesResolver]
})
export class AppRoutingModule { }
