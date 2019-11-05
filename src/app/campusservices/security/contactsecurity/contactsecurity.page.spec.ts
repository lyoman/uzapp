import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsecurityPage } from './contactsecurity.page';

describe('ContactsecurityPage', () => {
  let component: ContactsecurityPage;
  let fixture: ComponentFixture<ContactsecurityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsecurityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsecurityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
