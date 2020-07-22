import { TestBed } from '@angular/core/testing';

import { ListofjobsdataService } from './listofjobsdata.service';

describe('ListofjobsdataService', () => {
  let service: ListofjobsdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListofjobsdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
