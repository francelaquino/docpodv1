import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalreportV1Component } from './goalreport-v1.component';

describe('GoalreportV1Component', () => {
  let component: GoalreportV1Component;
  let fixture: ComponentFixture<GoalreportV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalreportV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalreportV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
