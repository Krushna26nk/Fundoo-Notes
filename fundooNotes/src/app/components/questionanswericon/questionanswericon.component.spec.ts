import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionanswericonComponent } from './questionanswericon.component';

describe('QuestionanswericonComponent', () => {
  let component: QuestionanswericonComponent;
  let fixture: ComponentFixture<QuestionanswericonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionanswericonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionanswericonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
