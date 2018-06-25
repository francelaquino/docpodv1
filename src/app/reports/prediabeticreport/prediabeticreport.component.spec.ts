import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrediabeticreportComponent } from './prediabeticreport.component';

describe('PrediabeticreportComponent', () => {
  let component: PrediabeticreportComponent;
  let fixture: ComponentFixture<PrediabeticreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrediabeticreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrediabeticreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
