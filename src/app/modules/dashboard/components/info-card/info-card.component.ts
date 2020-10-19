import { Component, OnInit } from '@angular/core';
import { CommunicationDashboardService } from '../../services/communication-dashboard.service';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css'],
  providers: [DashboardService]
})
export class InfoCardComponent implements OnInit {

  public stateCardData: any = [];

  constructor(private _communicationDashboardService: CommunicationDashboardService, private _dashboardService: DashboardService) { }

  ngOnInit(): void {

    this._communicationDashboardService.data$.subscribe(data => {

      this._dashboardService.getDataDevice(data.device, data.fromdate, data.todate).subscribe( (data:any) =>{

        this.stateCardData = data; 
  
      });

      this.stateCardData = data;

    });

  }

}
