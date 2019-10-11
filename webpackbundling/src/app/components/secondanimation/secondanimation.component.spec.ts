import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondanimationComponent } from './secondanimation.component';

describe('SecondanimationComponent', () => {
  let component: SecondanimationComponent;
  let fixture: ComponentFixture<SecondanimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondanimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
