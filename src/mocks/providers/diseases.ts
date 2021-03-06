import { Injectable } from '@angular/core';

import { Disease } from '../../models/disease';

@Injectable()
export class Diseases {
  diseases: Disease[] = [];

  defaultDisease: any = {
    "name": "Malaria",
    "profilePic": "assets/img/map.PNG",
    "causes": "common causes",
    "Preventions" : "how to prevent",
    "Vaccines" : "recommended vaccines",
    "symptoms": "Common Symptoms" 
  };


  constructor() {
    let diseases = [
      {
        "name": "Disease Name",
        "profilePic": "assets/img/mosquito.jpg",
        "causes": "common causes",
        "Preventions" : "how to prevent",
        "Vaccines" : "recommended vaccines",
        "symptoms": "Common Symptoms"   
      },
      {
        "name": "Disease Name",
        "profilePic": "assets/img/mosquito.jpg",
         "causes": "common causes",
        "Preventions" : "how to prevent",
        "Vaccines" : "recommended vaccines",
        "symptoms": "Common Symptoms"   
      },
      {
        "name": "Disease Name",
        "profilePic": "assets/img/mosquito.jpg",
        "causes": "common causes",
        "Preventions" : "how to prevent",
        "Vaccines" : "recommended vaccines",
        "symptoms": "Common Symptoms"   
      },
      {
        "name": "Disease Name",
        "profilePic": "assets/img/mosquito.jpg",
         "causes": "common causes",
        "Preventions" : "how to prevent",
        "Vaccines" : "recommended vaccines",
        "symptoms": "Common Symptoms"   
      },
      {
        "name": "Disease Name",
        "profilePic": "assets/img/mosquito.jpg",
         "causes": "common causes",
        "Preventions" : "how to prevent",
        "Vaccines" : "recommended vaccines",
        "symptoms": "Common Symptoms"   
      },
      {
        "name": "Disease Name",
        "profilePic": "assets/img/mosquito.jpg",
         "causes": "common causes",
        "Preventions" : "how to prevent",
        "Vaccines" : "recommended vaccines",
        "symptoms": "Common Symptoms"   
      },
      {
        "name": "Disease Name",
        "profilePic": "assets/img/mosquito.jpg",
         "causes": "common causes",
        "Preventions" : "how to prevent",
        "Vaccines" : "recommended vaccines",
        "symptoms": "Common Symptoms"   
      },
      {
        "name": "Disease Name",
        "profilePic": "assets/img/mosquito.jpg",
         "causes": "common causes",
        "Preventions" : "how to prevent",
        "Vaccines" : "recommended vaccines",
        "symptoms": "Common Symptoms"   
      }
    ];

    for (let disease of diseases) {
      this.diseases.push(new Disease(disease));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.diseases;
    }

    return this.diseases.filter((disease) => {
      for (let key in params) {
        let field = disease[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return disease;
        } else if (field == params[key]) {
          return disease;
        }
      }
      return null;
    });
  }

  add(disease: Disease) {
    this.diseases.push(disease);
  }

  delete(disease: Disease) {
    this.diseases.splice(this.diseases.indexOf(disease), 1);
  }
}
