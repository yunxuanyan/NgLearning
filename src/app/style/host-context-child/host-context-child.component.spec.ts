import { ComponentFixture, TestBed, async } from "@angular/core/testing";

import { HostContextChildComponent } from "./host-context-child.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("HostContextChildComponent", () => {
  let component: HostContextChildComponent;
  let fixture: ComponentFixture<HostContextChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HostContextChildComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostContextChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
