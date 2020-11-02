import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../core/guard/auth-guard.service';
import { Url } from '../shared/const/url';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [{
  path: Url.default, component: IndexComponent, canActivate: [AuthGuardService]
}, {
  path: Url.login, component: LoginComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
