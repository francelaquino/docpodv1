import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallscoreV1Component } from './overallscore-v1.component';

describe('OverallscoreV1Component', () => {
  let component: OverallscoreV1Component;
  let fixture: ComponentFixture<OverallscoreV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallscoreV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallscoreV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
