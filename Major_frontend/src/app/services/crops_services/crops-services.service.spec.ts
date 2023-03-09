import { TestBed } from '@angular/core/testing';

import { CropsServicesService } from './crops-services.service';

describe('CropsServicesService', () => {
  let service: CropsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CropsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
