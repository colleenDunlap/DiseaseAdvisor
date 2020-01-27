import { Injectable } from '@angular/core';

import { Country } from '../../models/country';
import { Api } from '../api/api';

@Injectable()
export class Countries {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/items', params);
  }


}