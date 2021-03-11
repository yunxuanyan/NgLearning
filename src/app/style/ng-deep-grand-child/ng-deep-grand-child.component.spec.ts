import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDeepGrandChildComponent } from './ng-deep-grand-child.component';

describe('NgDeepGrandChildComponent', () => {
  let component: NgDeepGrandChildComponent;
  let fixture: ComponentFixture<NgDeepGrandChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDeepGrandChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDeepGrandChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
