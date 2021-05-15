import { ComponentFixture, TestBed, async } from "@angular/core/testing";

import { HostChildComponent } from "./host-child.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("HostChildComponent", () => {
  let component: HostChildComponent;
  let fixture: ComponentFixture<HostChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HostChildComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
