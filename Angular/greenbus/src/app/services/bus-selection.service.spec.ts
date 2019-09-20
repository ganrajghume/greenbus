import { TestBed } from '@angular/core/testing';

import { BusSelectionService } from './bus-selection.service';

describe('BusSelectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusSelectionService = TestBed.get(BusSelectionService);
    expect(service).toBeTruthy();
  });
});
