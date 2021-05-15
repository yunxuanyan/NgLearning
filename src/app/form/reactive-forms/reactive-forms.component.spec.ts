import { ComponentFixture, TestBed, async } from "@angular/core/testing";

import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ReactiveFormsComponent } from "./reactive-forms.component";

describe("ReactiveFormsComponent", () => {
  let component: ReactiveFormsComponent;
  let fixture: ComponentFixture<ReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormsComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
