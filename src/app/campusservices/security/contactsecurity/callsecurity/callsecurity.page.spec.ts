import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsecurityPage } from './callsecurity.page';

describe('CallsecurityPage', () => {
  let component: CallsecurityPage;
  let fixture: ComponentFixture<CallsecurityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallsecurityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallsecurityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
