import { TestBed } from '@angular/core/testing';

import { RefreshService } from './refresh.service';
import { HttpClientModule } from '@angular/common/http';

describe('RefreshService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: RefreshService = TestBed.get(RefreshService);
    expect(service).toBeTruthy();
  });
});
