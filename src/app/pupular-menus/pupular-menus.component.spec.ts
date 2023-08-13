/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PupularMenusComponent } from './pupular-menus.component';

describe('PupularMenusComponent', () => {
  let component: PupularMenusComponent;
  let fixture: ComponentFixture<PupularMenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PupularMenusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PupularMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
