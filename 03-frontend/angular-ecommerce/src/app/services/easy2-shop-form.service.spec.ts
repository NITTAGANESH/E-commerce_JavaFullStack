import { TestBed } from '@angular/core/testing';

import { Easy2ShopFormService } from './easy2-shop-form.service';

describe('Easy2ShopFormService', () => {
  let service: Easy2ShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Easy2ShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
