import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaselinedescreportComponent } from './baselinedescreport.component';

describe('BaselinedescreportComponent', () => {
  let component: BaselinedescreportComponent;
  let fixture: ComponentFixture<BaselinedescreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaselinedescreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaselinedescreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
