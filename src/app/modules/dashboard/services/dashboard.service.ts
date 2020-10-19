import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _http: HttpClient) { }

  getDataDevice(device, fromdate, todate){
    return this._http.get(`https://api.dynasystem.cl/data/sensor/${device}/calculatedIndex/1?from=${fromdate}&to=${todate}`);
  }
}
