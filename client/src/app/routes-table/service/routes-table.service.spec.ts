import { TestBed } from '@angular/core/testing';

import { RoutesTableService } from './routes-table.service';

describe('RoutesTableService', () => {
  let service: RoutesTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutesTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
