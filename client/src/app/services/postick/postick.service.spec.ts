import { TestBed, inject } from '@angular/core/testing';

import { PostickService } from './postick.service';

describe('PostickService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostickService]
    });
  });

  it('should be created', inject([PostickService], (service: PostickService) => {
    expect(service).toBeTruthy();
  }));
});
