import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDeepSblingComponent } from './ng-deep-sbling.component';

describe('NgDeepSblingComponent', () => {
  let component: NgDeepSblingComponent;
  let fixture: ComponentFixture<NgDeepSblingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDeepSblingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDeepSblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
