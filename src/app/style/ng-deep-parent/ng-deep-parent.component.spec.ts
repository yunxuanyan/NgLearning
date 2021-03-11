import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDeepParentComponent } from './ng-deep-parent.component';

describe('NgDeepParentComponent', () => {
  let component: NgDeepParentComponent;
  let fixture: ComponentFixture<NgDeepParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDeepParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDeepParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
