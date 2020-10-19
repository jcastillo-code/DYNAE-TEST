import { Component, OnInit } from '@angular/core';
import { CommunicationDashboardService } from '../../services/communication-dashboard.service';
import { DashboardService } from '../../services/dashboard.service';

interface Dispositivo {
  id: string;
  name: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService, CommunicationDashboardService]
})
export class DashboardComponent implements OnInit {

  dispositivos: Dispositivo[] = [
    {id: '12', name: 'Las Delicias'},
    {id: '285', name: 'Camarico'},
    {id: '294', name: 'Pencahue'}
  ];

  constructor(private _communicationDashboardService: CommunicationDashboardService) { }

  ngOnInit(): void {

  }

  loadData(device, fromdate, todate){

    this._communicationDashboardService.data$.emit({device:device,fromdate:new Date(fromdate).toISOString(),todate: new Date(todate).toISOString()});
    
  }

}
