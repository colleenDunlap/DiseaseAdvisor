import { Injectable } from '@angular/core';

import { MedCenter } from '../../models/medCenter';

@Injectable()
export class MedCenters {
  medCenters: MedCenter[] = [];

  defaultMedCenter: any = {
    "name": "Hospital1",
    "profilePic": "assets/imgs/logo.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let medCenters = [
      {
        "name": "Medical Center Name",
        "profilePic": "assets/imgs/logo.jpg",
        "about": "this is a location where you can seek medical advice and treatment"
      },
      {
        "name": "Medical Center Name",
        "profilePic": "assets/imgs/logo.jpg",
        "about": "this is a location where you can seek medical advice and treatment"
      },
      {
        "name": "Medical Center Name",
        "profilePic": "assets/imgs/logo.jpg",
        "about": "this is a location where you can seek medical advice and treatment"
      },
      {
        "name": "Medical Center Name",
        "profilePic": "assets/imgs/logo.jpg",
        "about": "this is a location where you can seek medical advice and treatment"
      }
    ];

    for (let medCenter of medCenters) {
      this.medCenters.push(new MedCenter(medCenter));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.medCenters;
    }

    return this.medCenters.filter((medCenter) => {
      for (let key in params) {
        let field = medCenter[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return medCenter;
        } else if (field == params[key]) {
          return medCenter;
        }
      }
      return null;
    });
  }

 
}
