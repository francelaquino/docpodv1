import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthscoreV1Component } from './healthscore-v1.component';

describe('HealthscoreV1Component', () => {
  let component: HealthscoreV1Component;
  let fixture: ComponentFixture<HealthscoreV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthscoreV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthscoreV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
