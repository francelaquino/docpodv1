import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvdreportComponent } from './cvdreport.component';

describe('CvdreportComponent', () => {
  let component: CvdreportComponent;
  let fixture: ComponentFixture<CvdreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvdreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvdreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
