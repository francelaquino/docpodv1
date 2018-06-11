import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyV1Component } from './survey-v1.component';

describe('SurveyV1Component', () => {
  let component: SurveyV1Component;
  let fixture: ComponentFixture<SurveyV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
