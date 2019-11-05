import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugdetailPage } from './drugdetail.page';

describe('DrugdetailPage', () => {
  let component: DrugdetailPage;
  let fixture: ComponentFixture<DrugdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugdetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
