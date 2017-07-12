/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Iteration2mainComponent } from './iteration2main.component';

describe('Iteration2mainComponent', () => {
  let component: Iteration2mainComponent;
  let fixture: ComponentFixture<Iteration2mainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iteration2mainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iteration2mainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
