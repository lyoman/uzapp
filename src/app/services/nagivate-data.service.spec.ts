import { TestBed } from '@angular/core/testing';

import { NagivateDataService } from './nagivate-data.service';

describe('NagivateDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NagivateDataService = TestBed.get(NagivateDataService);
    expect(service).toBeTruthy();
  });
});
