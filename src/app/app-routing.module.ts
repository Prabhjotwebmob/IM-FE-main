import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'auth',
        exposedModule: './Module',
      }).then((m) => m.AuthModule),
  },
  {
    path: 'web',
    component: MainComponent,
    children: [
      {
        path: 'money-market',
        loadChildren: () =>
          loadRemoteModule({
            type: 'manifest',
            remoteName: 'money-market',
            exposedModule: './Module',
          }).then((m) => m.MarketModule),
      },
      {
        path: 'repo',
        loadChildren: () =>
          loadRemoteModule({
            type: 'manifest',
            remoteName: 'repo',
            exposedModule: './Module',
          }).then((m) => m.RepoModule),
      },
      {
        path: 'notice-account',
        loadChildren: () =>
          loadRemoteModule({
            type: 'manifest',
            remoteName: 'notice-account',
            exposedModule: './Module',
          }).then((m) => m.NoticeAccountModule),
      },
      {
        path: 'mosaic',
        loadChildren: () =>
          loadRemoteModule({
            type: 'manifest',
            remoteName: 'mosaic',
            exposedModule: './Module',
          }).then((m) => m.MosaicModule),
      },
      {
        path: 'trading-partner',
        loadChildren: () =>
          loadRemoteModule({
            type: 'manifest',
            remoteName: 'trading-partner',
            exposedModule: './Module',
          }).then((m) => m.TradingPartnerModule),
      },
      {
        path: 'third-party',
        loadChildren: () =>
          loadRemoteModule({
            type: 'manifest',
            remoteName: 'third-party',
            exposedModule: './Module',
          }).then((m) => m.ThirdPartyModule),
      },

      {
        path: '**',
        redirectTo: 'money-market'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
