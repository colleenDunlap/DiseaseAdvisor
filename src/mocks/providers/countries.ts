import { Injectable } from '@angular/core';

import { Country } from '../../models/country';

@Injectable()
export class Countries {
    countries: Country[] = [];

  defaultCountry: any = {
    "name": "America",
    "flag": "assets/img/png250px/us.png",
    "about": "malaria is a disease.",
  };


  constructor() {
    let countries = [
      {
        "name": "Afghanistan",
        "flag": "assets/img/png250px/af.png",
        "price": "$1"
      },
      {
        "name": "Albania",
        "flag": "assets/img/png250px/al.png",
        "price": "$1"
      },
      {
        "name": "Algeria",
        "flag": "assets/img/png250px/dz.png",
        "price": "$1"
      },
      {
        "name": "Andorra",
        "flag": "assets/img/png250px/ad.png",
        "price": "$1"
      },
      {
        "name": "Angola",
        "flag": "assets/img/png250px/ao.png",
        "price": "$1"
      },
      {
        "name": "Antigua and Barbuda",
        "flag": "assets/img/png250px/ag.png",
        "price": "$1"
      },
      {
        "name": "Argentina",
        "flag": "assets/img/png250px/ar.png",
        "price": "$1"
      },
      {
        "name": "Armenia",
        "flag": "assets/img/png250px/am.png",
        "price": "$1"
      },
      {
        "name": "Yemen",
        "flag": "assets/img/png250px/ae.png",
        "price": "$1"
      },
      {
        "name": "Zambia",
        "flag": "assets/img/png250px/za.png",
        "price": "$1"
      },
      {
        "name": "Zimbabwe",
        "flag": "assets/img/png250px/zw.png",
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