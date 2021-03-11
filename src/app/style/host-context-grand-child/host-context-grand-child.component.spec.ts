import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostContextGrandChildComponent } from './host-context-grand-child.component';

describe('HostContextGrandChildComponent', () => {
  let component: HostContextGrandChildComponent;
  let fixture: ComponentFixture<HostContextGrandChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostContextGrandChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostContextGrandChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
