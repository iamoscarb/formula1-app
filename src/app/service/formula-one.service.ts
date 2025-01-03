import { Injectable } from '@angular/core';
import { ApiHttpService } from './api-http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormulaOneService extends ApiHttpService {

  override api = 'http://ergast.com/api/';
  override domain = 'f1/';

}
