import { TestBed } from '@angular/core/testing';

import { BookCRUDService } from './book-crud.service';

describe('BookCRUDService', () => {
  let service: BookCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
