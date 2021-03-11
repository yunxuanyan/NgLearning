import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostContextSblingComponent } from './host-context-sbling.component';

describe('HostContextSblingComponent', () => {
  let component: HostContextSblingComponent;
  let fixture: ComponentFixture<HostContextSblingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostContextSblingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostContextSblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
