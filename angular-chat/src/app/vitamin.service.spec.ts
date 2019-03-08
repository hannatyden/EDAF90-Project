import { TestBed } from '@angular/core/testing';

import { VitaminService } from './vitamin.service';

describe('VitaminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VitaminService = TestBed.get(VitaminService);
    expect(service).toBeTruthy();
  });
});
