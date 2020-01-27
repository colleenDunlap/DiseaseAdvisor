import { Injectable } from '@angular/core';

import { Disease } from '../../models/disease';
import { Api } from '../api/api';

@Injectable()
export class Diseases {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/items', params);
  }

  add(disease: Disease) {
  }

  delete(disease: Disease) {
  }

}
