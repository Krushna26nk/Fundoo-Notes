import { TestBed, async, inject } from '@angular/core/testing';

import { AuthrouteGuard } from './authroute.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthrouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthrouteGuard],
      imports:[
        RouterTestingModule
      ]
    });
  });

  it('should ...', inject([AuthrouteGuard], (guard: AuthrouteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
