import { TestBed } from '@angular/core/testing';

import { PrproductsService } from './prproducts.service';

describe('PrproductsService', () => {
  let service: PrproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
