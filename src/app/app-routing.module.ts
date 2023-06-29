import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
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
}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
