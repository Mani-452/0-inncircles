import { TestBed } from '@angular/core/testing';

import { GettitleService } from './gettitle.service';

describe('GettitleService', () => {
  let service: GettitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GettitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
