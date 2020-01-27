import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { DiseaseDetailPage } from './disease-detail';

@NgModule({
  declarations: [
    DiseaseDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DiseaseDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    DiseaseDetailPage
  ]
})
export class DiseaseDetailPageModule { }
