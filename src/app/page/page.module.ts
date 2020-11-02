import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../shared/shared.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [LoginComponent, IndexComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    SharedModule,
    PdfViewerModule,
  ]
})
export class PageModule { }
