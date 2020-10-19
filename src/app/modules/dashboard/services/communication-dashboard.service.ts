import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationDashboardService {

  public data$ = new EventEmitter<any>();

  constructor() { }
}
