import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const URL = 'http://localhost:3000/remoteEntry.js';

export const APP_ROUTES: Routes = [{
  path: 'chat',
  loadChildren: () =>
    loadRemoteModule({
      type: 'manifest',
      remoteName: 'chat',
      exposedModule: './Module',
    }).then((m) => m.ChatModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
