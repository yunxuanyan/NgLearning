import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraRouterOutletComponent } from './extra-router-outlet.component';

describe('ExtraRouterOutletComponent', () => {
  let component: ExtraRouterOutletComponent;
  let fixture: ComponentFixture<ExtraRouterOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraRouterOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraRouterOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
