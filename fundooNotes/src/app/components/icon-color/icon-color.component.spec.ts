import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconColorComponent } from './icon-color.component';

describe('IconColorComponent', () => {
  let component: IconColorComponent;
  let fixture: ComponentFixture<IconColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
