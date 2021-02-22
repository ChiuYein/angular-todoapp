import { TestBed } from '@angular/core/testing';

import { SubtodoStorageService } from './subtodo-storage.service';

describe('SubtodoStorageService', () => {
  let service: SubtodoStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubtodoStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
