import { TestBed } from '@angular/core/testing';

import { UrlService } from './url.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientModule,RouterTestingModule,MatSnackBarModule
    ]
  }));

  it('should be created', () => {
    const service: UrlService = TestBed.get(UrlService);
    expect(service).toBeTruthy();
  });
});
