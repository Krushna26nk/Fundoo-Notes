import { TestBed } from '@angular/core/testing';

import { NoteService } from './note.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('NoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientModule,RouterTestingModule
    ]
  }));

  it('should be created', () => {
    const service: NoteService = TestBed.get(NoteService);
    expect(service).toBeTruthy();
  });
});
