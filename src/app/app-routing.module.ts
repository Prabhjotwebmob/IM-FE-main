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
  path:'web',
  component: MainComponent,
  children: [
    {
      path: 'market',
      loadChildren: () =>
        loadRemoteModule({
          type: 'manifest',
          remoteName: 'market',
          exposedModule: './Module',
        }).then((m) => m.MarketModule),
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
      loadChildren: () =>
        loadRemoteModule({
          type: 'manifest',
          remoteName: 'market',
          exposedModule: './Module',
        }).then((m) => m.MarketModule),
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
