import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { MedicalPage } from './medical';

@NgModule({
  declarations: [
    MedicalPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicalPage),
    TranslateModule.forChild()
  ],
  exports: [
    MedicalPage
  ]
})
export class MedicalPageModule { }
