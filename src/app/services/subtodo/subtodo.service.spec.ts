import { TestBed } from '@angular/core/testing';

import { SubtodoService } from './subtodo.service';

describe('SubtodoService', () => {
  let service: SubtodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubtodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
