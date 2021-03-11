import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostGrandChildComponent } from './host-grand-child.component';

describe('HostGrandChildComponent', () => {
  let component: HostGrandChildComponent;
  let fixture: ComponentFixture<HostGrandChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostGrandChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostGrandChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
