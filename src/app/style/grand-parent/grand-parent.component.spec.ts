import { ComponentFixture, TestBed, async } from "@angular/core/testing";

import { GrandParentComponent } from "./grand-parent.component";
import { HostParentComponent } from "../host-parent/host-parent.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { NgDeepParentComponent } from "../ng-deep-parent/ng-deep-parent.component";

describe("GrandParentComponent", () => {
  let component: GrandParentComponent;
  let fixture: ComponentFixture<GrandParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GrandParentComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
