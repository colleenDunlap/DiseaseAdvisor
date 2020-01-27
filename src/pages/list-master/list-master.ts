import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Disease } from '../../models/disease';
import { Diseases } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentDiseases: Disease[];

  constructor(public navCtrl: NavController, public diseases: Diseases, public modalCtrl: ModalController) {
    this.currentDiseases = this.diseases.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   
  addDisease() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(disease => {
      if (disease) {
        this.diseases.add(disease);
      }
    })
    addModal.present();
  }
  
  */

  /**
   * Navigate to the detail page for this item.
   */
  openDisease(disease: Disease) {
    this.navCtrl.push('DiseaseDetailPage', {
      disease: disease
    });
  }
}
