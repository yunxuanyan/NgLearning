import { ComponentFixture, TestBed, async } from "@angular/core/testing";

import { NO_ERRORS_SCHEMA } from "@angular/core";
import { NgDeepParentComponent } from "./ng-deep-parent.component";

describe("NgDeepParentComponent", () => {
  let component: NgDeepParentComponent;
  let fixture: ComponentFixture<NgDeepParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgDeepParentComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDeepParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
