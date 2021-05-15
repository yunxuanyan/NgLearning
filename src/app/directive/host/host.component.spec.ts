import { ComponentFixture, TestBed, async } from "@angular/core/testing";

import { FormsModule } from "@angular/forms";
import { HostComponent } from "./host.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("HostComponent", () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
