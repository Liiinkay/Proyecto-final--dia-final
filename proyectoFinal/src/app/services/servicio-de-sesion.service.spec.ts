import { TestBed } from '@angular/core/testing';

import { ServicioDeSesionService } from './servicio-de-sesion.service';

describe('ServicioDeSesionService', () => {
  let service: ServicioDeSesionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDeSesionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
