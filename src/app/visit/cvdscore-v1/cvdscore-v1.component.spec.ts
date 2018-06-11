import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvdscoreV1Component } from './cvdscore-v1.component';

describe('CvdscoreV1Component', () => {
  let component: CvdscoreV1Component;
  let fixture: ComponentFixture<CvdscoreV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvdscoreV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvdscoreV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
