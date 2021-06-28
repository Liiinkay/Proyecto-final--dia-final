import { TestBed } from '@angular/core/testing';

import { ServicioTicketsService } from './servicio-tickets.service';

describe('ServicioTicketsService', () => {
  let service: ServicioTicketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioTicketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
