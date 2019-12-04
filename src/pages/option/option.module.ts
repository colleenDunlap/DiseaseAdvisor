import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { OptionPage } from './option';

@NgModule({
  declarations: [
    OptionPage,
  ],
  imports: [
    IonicPageModule.forChild(OptionPage),
    TranslateModule.forChild()
  ],
  exports: [
    OptionPage
  ]
})
export class OptionPageModule { }
