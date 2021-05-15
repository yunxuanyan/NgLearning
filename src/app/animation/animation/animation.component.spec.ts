import { ComponentFixture, TestBed, async } from "@angular/core/testing";

import { AnimationComponent } from "./animation.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

describe("AnimationComponent", () => {
  let component: AnimationComponent;
  let fixture: ComponentFixture<AnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationComponent],
      imports: [NoopAnimationsModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(AnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("#clicked() should toggle #isOpen", () => {
    const comp = new AnimationComponent();
    expect(comp.isOpen).toBe(false, "off at first");
    comp.trigger();
    expect(comp.isOpen).toBe(true, "on after clicked");
  });
});
