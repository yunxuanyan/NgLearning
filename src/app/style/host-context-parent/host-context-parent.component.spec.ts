import { ComponentFixture, TestBed, async } from "@angular/core/testing";

import { HostContextParentComponent } from "./host-context-parent.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("HostContextParentComponent", () => {
  let component: HostContextParentComponent;
  let fixture: ComponentFixture<HostContextParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HostContextParentComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostContextParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
