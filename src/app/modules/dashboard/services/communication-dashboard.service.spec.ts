import { TestBed } from '@angular/core/testing';

import { CommunicationDashboardService } from './communication-dashboard.service';

describe('CommunicationDashboardService', () => {
  let service: CommunicationDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicationDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
