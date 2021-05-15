import { TestBed, async } from "@angular/core/testing";

import { ColourChangerDirective } from "./colour-changer.directive";
import { ElementRef } from "@angular/core";

describe("ColourChangerDirective", () => {
  let fakeEl;

  beforeEach(async(() => {
    fakeEl = {};

    //   TestBed.configureTestingModule({
    //     declarations: [ColourChangerDirective],
    //     providers: [{ provide: ElementRef, useValue: fakeEl }],
    //   });
  }));

  it("should create an instance", () => {
    const directive = new ColourChangerDirective(fakeEl);
    expect(directive).toBeTruthy();
  });
});
