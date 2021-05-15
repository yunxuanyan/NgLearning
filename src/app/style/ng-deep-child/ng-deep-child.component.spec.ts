import { ComponentFixture, TestBed, async } from "@angular/core/testing";

import { NO_ERRORS_SCHEMA } from "@angular/core";
import { NgDeepChildComponent } from "./ng-deep-child.component";

describe("NgDeepChildComponent", () => {
  let component: NgDeepChildComponent;
  let fixture: ComponentFixture<NgDeepChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgDeepChildComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDeepChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
