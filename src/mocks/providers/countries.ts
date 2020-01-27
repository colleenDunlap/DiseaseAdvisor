import { Injectable } from '@angular/core';

import { Country } from '../../models/country';

@Injectable()
export class Countries {
    countries: Country[] = [];

  defaultCountry: any = {
    "name": "America",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "malaria is a disease.",
  };


  constructor() {
    let countries = [
      {
        "name": "Country Name",
        "flag": "assets/img/mosquito.jpg",
        "price": "$1"
      },
      {
        "name": "Country Name",
        "flag": "assets/img/mosquito.jpg",
        "price": "$1"
      },
      {
        "name": "Country Name",
        "flag": "assets/img/mosquito.jpg",
        "price": "$1"
      },
      {
        "name": "Country Name",
        "flag": "assets/img/mosquito.jpg",
        "price": "$1"
      }
    ];

    for (let country of countries) {
      this.countries.push(new Country(country));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.countries;
    }

    return this.countries.filter((country) => {
      for (let key in params) {
        let field = country[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return country;
        } else if (field == params[key]) {
          return country;
        }
      }
      return null;
    });
  }

}