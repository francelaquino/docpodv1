import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaselinereportComponent } from './baselinereport.component';

describe('BaselinereportComponent', () => {
  let component: BaselinereportComponent;
  let fixture: ComponentFixture<BaselinereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaselinereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaselinereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
