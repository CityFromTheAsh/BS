import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Url } from './shared/const/url';

const routes: Routes = [{ path: Url.default, loadChildren: () => import('./page/page.module').then(m => m.PageModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
