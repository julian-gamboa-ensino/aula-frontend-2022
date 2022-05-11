import { TestBed } from '@angular/core/testing';

import { GetFotosDbService } from './get-fotos-db.service';

describe('GetFotosDbService', () => {
  let service: GetFotosDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFotosDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
