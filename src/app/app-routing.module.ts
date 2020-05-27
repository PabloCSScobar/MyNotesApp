import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './home/auth/auth.component';
import { MainComponent } from './editor/main/main.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () =>
          import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'notes',
    component: MainComponent,
    loadChildren: () =>
          import('./editor/editor.module').then(m => m.EditorModule)
  },
  {
    path: '**',
    component: MainComponent,
    loadChildren: () =>
          import('./editor/editor.module').then(m => m.EditorModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
