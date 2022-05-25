import { TestBed } from '@angular/core/testing';

import { ListjoueursService } from './listjoueurs.service';

describe('ListjoueursService', () => {
  let service: ListjoueursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListjoueursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
