import { Injectable } from '@angular/core';

import { MedCenter } from '../../models/medCenter';
import { Api } from '../api/api';

@Injectable()
export class MedCenters {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/medCenters', params);
  }

  
}
