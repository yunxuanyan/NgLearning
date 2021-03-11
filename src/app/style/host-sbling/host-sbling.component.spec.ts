import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostSblingComponent } from './host-sbling.component';

describe('HostSblingComponent', () => {
  let component: HostSblingComponent;
  let fixture: ComponentFixture<HostSblingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostSblingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostSblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
