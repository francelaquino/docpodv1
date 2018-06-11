import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrediabeticscoreV1Component } from './prediabeticscore-v1.component';

describe('PrediabeticscoreV1Component', () => {
  let component: PrediabeticscoreV1Component;
  let fixture: ComponentFixture<PrediabeticscoreV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrediabeticscoreV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrediabeticscoreV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
