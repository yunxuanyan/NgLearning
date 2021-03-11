import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDeepChildComponent } from './ng-deep-child.component';

describe('NgDeepChildComponent', () => {
  let component: NgDeepChildComponent;
  let fixture: ComponentFixture<NgDeepChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDeepChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDeepChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
