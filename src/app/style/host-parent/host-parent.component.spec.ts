import { ComponentFixture, TestBed, async } from "@angular/core/testing";

import { HostParentComponent } from "./host-parent.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("HostParentComponent", () => {
  let component: HostParentComponent;
  let fixture: ComponentFixture<HostParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HostParentComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
