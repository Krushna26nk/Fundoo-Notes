import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import 'jasmine';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
});
